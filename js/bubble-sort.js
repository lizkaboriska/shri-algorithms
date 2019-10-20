function BubbleSort(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let buff = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = buff;
        swap = true;
      }
    }
  } while (swap);
  return arr;
}
