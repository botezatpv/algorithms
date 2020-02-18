const heapSort = (array) => {
  var t0 = performance.now();
  for (let i = 1; i < array.length; i = (i * 2) + 1) {
    heapify(array, i, i * 2);
  }
  var t1 = performance.now();
  algorithmTimes['heapSort'] = {...algorithmTimes['heapSort'], [array.length]: t1 - t0};

};

const heapify = (array, startPoint, endPoint) => {
};


heapSort(arr10);
heapSort(arr100);
heapSort(arr1000);
heapSort(arr10000);
