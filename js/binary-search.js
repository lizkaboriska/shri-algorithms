function binarySearch(arr, x) {
  let l = -1,
    r = arr.length;
  while (r - l > 1) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] <= x) {
      l = m;
    } else {
      r = m;
    }
  }
  if (l != -1 && arr[l] != x) {
    return -1;
  }
  return l;
}
