function permutations(n) {
  res = [];
  function gen(perm, i) {
    if (i == n) {
      //console.log(perm);
      res.push(perm.slice());
      return;
    }
    gen(perm, i + 1);
    for (let j = i + 1; j < n; j++) {
      let t = perm[i];
      perm[i] = perm[j];
      perm[j] = t;
      gen(perm, i + 1);
      perm[j] = perm[i];
      perm[i] = t;
    }
  }

  let arr = [];
  for (let x = 1; x <= n; ++x) {
    arr.push(x);
  }
  gen(arr, 0);

  return res;
}
