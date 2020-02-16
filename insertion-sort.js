const insertionSort = (array) => {
  var t0 = performance.now();
  for(let i = 1; i < array.length; i++) {
    insert(array, i, array[i]);
  }
  var t1 = performance.now();

  algorithmTimes['insertionSort'] = {...algorithmTimes['insertionSort'], [array.length]: t1 - t0};
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

insertionSort(arr10);
insertionSort(arr100);
insertionSort(arr1000);
insertionSort(arr10000);
