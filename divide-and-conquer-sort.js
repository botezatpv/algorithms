const divideAndConquerSort = (array, left, right, pivotIndex) => {
  var t0 = performance.now();
 
  console.log(array, store);

  var t1 = performance.now();
  // algorithmTimes['divideAndConquerSort'] = {...algorithmTimes['divideAndConquerSort'], [array.length]: t1 - t0};
  console.log(`Array of n = ${array.length} elements: time ${t1 - t0}!`);
}

const partition = (array, left, right, pivotIndex) => {
  const pivot = array[pivotIndex];
  swap(array, right, pivotIndex);
  let store = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivot) {
      swap(array, i, store);
      store++;
    }
  }

  swap(array, right, store);
  console.log(array);
  return store
}

const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
partition([5, 4, 3, 2, 1], 0, 4, 2);
partition([1, 2, 5, 3, 4], 0, 4, 2);
// partition(arr10, 0, 5, 9);
// divideAndConquerSort(arr100);
// divideAndConquerSort(arr1000);
// divideAndConquerSort(arr10000);
