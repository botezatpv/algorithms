const insertionSort = (array) => {
  var t0 = performance.now();
  for(let i = 1; i < array.length; i++) {
    insert(array, i, array[i]);
  }
  var t1 = performance.now();
  console.log(`Array of n = ${array.length} elements: time ${t1 - t0}!`);
}

const insert = (array, position, value) => {
  let i = position - 1;
  while (i >= 0 && array[i] > value) {
    array[i + 1] = array[i];
    i--;
  }
  array[i + 1] = value;
}

insertionSort(generateRandomArray(10));
insertionSort(generateRandomArray(100));
insertionSort(generateRandomArray(1000));
insertionSort(generateRandomArray(10000));
