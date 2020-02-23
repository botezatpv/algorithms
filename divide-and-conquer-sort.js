const divideAndConquerSort = (array) => {
  var t0 = performance.now();
  var t1 = performance.now();

  algorithmTimes['divideAndConquerSort'] = {...algorithmTimes['divideAndConquerSort'], [array.length]: t1 - t0};
  console.log(`Array of n = ${array.length} elements: time ${t1 - t0}!`);
}

divideAndConquerSort(arr10);
divideAndConquerSort(arr100);
divideAndConquerSort(arr1000);
divideAndConquerSort(arr10000);
