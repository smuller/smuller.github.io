let num_domains = int_of_string (Sys.argv.(1))

module T = Domainslib.Task

let rec fib n =
  if n < 2 then 1
  else fib (n-1) + fib (n-2)

let rec fib_par pool n =
  if n <= 20 then fib n
  else
    let a = T.async pool (fun _ -> fib_par pool (n-1)) in
    let b = T.async pool (fun _ -> fib_par pool (n-2)) in
    T.await pool a + T.await pool b

let test_seq_fib n =
  let start_t = Unix.gettimeofday () in
  let _ = fib n in
  let end_t = Unix.gettimeofday () in
  Printf.printf "%.3fs\n" (end_t -. start_t)

let test_fib n =
  let pool = T.setup_pool ~num_domains:(num_domains - 1) () in
  let start_t = Unix.gettimeofday () in
  let _ = T.run pool (fun _ -> fib_par pool n) in
  let end_t = Unix.gettimeofday () in
  T.teardown_pool pool;
  Printf.printf "%.3fs\n" (end_t -. start_t)

let _ = test_fib 43
