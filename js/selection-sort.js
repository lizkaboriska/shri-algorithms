let min;
function selectionSearch(arr) {
  let sorted_arr = [];
  for (let i = 0; i < arr.lentgth; i++) {
    min = Math.min(...arr);
    sorted_arr.push(min);
    for (let j = 0; j < arr.lentgth; j++) {
      if ((arr[j] = min)) {
        arr.splice(0, i);
      }
    }
  }
  return sorted_arr;
}
