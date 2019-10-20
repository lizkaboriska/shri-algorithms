function selectionSearch(arr) {
  let sorted_arr = [];
  let min = 0;
  while (arr.length > 0) {
    min = Math.min(...arr);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == min) {
        arr.splice(j, 1);
        sorted_arr.push(min);
        break;
      }
    }
  }
  return sorted_arr;
}
