const heapSort = (array) => {
  var t0 = performance.now();
  for (let i = 0; i < (array.length) / 2; i++) {
    heapify(array, i, i * 2);
  }
  var t1 = performance.now();
  algorithmTimes['heapSort'] = {...algorithmTimes['heapSort'], [array.length]: t1 - t0};

};

const heapify = (array, startPoint, depth) => {
  const largets = array[startPoint];
  const left = 2*startPoint + 1;
  const right = 2*startPoint + 2;
  console.log(`${array[left]}-${array[startPoint]}-${array[right]}`)

};

heapSort([8, 11, 09, 02, 10, 16, 18, 22, 13, 31, 44, 56])
// heapSort(arr10);
// heapSort(arr100);
// heapSort(arr1000);
// heapSort(arr10000);
