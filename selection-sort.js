const selectionSort = (array) => {
  var t0 = performance.now();
  for(let i = array.length - 1; i >= 1; i--) {
    const maxPos = maxPostion(array, 0, i);
    if (maxPos != i) {
      const temp = array[i];
      array[i] = array[maxPos];
      array[maxPos] = temp;
    }
  }
  var t1 = performance.now();
  algorithmTimes['selectionSort'] = {...algorithmTimes['selectionSort'], [array.length]: t1 - t0};
  console.log(algorithmTimes);
};

const maxPostion = (array, right) => {
  let maxPos = 0;
  for (let i = 0; i < right + 1; i++) {
    if (array[i] > array[maxPos]) {
      maxPos = i;
    }
  }

  return maxPos;
}

selectionSort(arr10);
selectionSort(arr100);
selectionSort(arr1000);
selectionSort(arr10000);
