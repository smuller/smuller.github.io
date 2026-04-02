let add_one x = x + 1
let double x = x * 2
let double_plus_one x = add_one (double x)
let five = double_plus_one 2

let add_one k x = k (x + 1)
let double k x = k (x * 2)
let double_plus_one k x = double (fun doubled -> add_one k doubled) x
let five = double_plus_one (fun x -> x) 2

let div_cps (x: int) (y: int) (k: int -> 'k) (e: string -> 'k) =
  if y = 0 then
    e "Division by zero!"
  else
    k (x / y)

let _ = div_cps 10 2
          (Printf.printf "Result: %d\n")
          (Printf.eprintf "Error: %s\n")
