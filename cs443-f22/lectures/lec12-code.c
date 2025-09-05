__pair f(env __env, int y) {
  __env = extend_env(y, __env);
  __pair temp = new(__pair);
  temp.pair_fst = lookup(1, __env);
  temp.pair_snd = lookup(0, __env);
  return temp;
}

__clos pair(env __env, int x) {
  __env = extend_env(x, __env);
  __clos f_clos = new(__clos);
  f_clos.clos_fun = f;
  f_clos.clos_env = __env;
  return f_clos;
}

__pair main() {
  pair_clos.clos_fun = pair;
  pair_clos.clos_env = __env;
  __clos temp = pair_clos.clos_fun(__env, 1);
  return temp.clos_fun(__env, 2);
}

