function pushFront(arr, x) {
  // start at the end of the array.
  for (let i = arr.length; i > 0; i--) {
    // move everything over in the array
    arr[i] = arr[i - 1];
  }
  arr[0] = x;
  return arr;
}

console.log(pushFront([1, 2, 3], 0));
