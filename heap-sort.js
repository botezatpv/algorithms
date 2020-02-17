const heapSort = (array) => {
  var t0 = performance.now();
  var t1 = performance.now();
  algorithmTimes['heapSort'] = {...algorithmTimes['heapSort'], [array.length]: t1 - t0};

};


heapSort(arr10);
heapSort(arr100);
heapSort(arr1000);
heapSort(arr10000);
