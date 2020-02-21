const heapSort = (array) => {
  var t0 = performance.now();
  buildHeap(array);
  for (let i = array.length - 1; i >= 1; i--) {
    let tmp = array[0];
    array[0] = array[i];
    array[i] = tmp;
    heapify(array, 0, i);
  }
  var t1 = performance.now();
  algorithmTimes['heapSort'] = {...algorithmTimes['heapSort'], [array.length]: t1 - t0};
};

const buildHeap = (array) => {
  for (let i = (array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
}

const heapify = (array, startPoint, max) => {
  let largest = startPoint;
  const left = 2*startPoint + 1;
  const right = 2*startPoint + 2;
  // console.log(`${array[left]}-${array[startPoint]}-${array[right]}`);
  
  if (right < max && array[largest] < array[right]) {
    largest = right;
  } 
  
  if (left < max && array[largest] < array[left]) {
    largest = left;
  }
    
  if (largest != startPoint) {
    const startPointValue = array[startPoint];
    array[startPoint] = array[largest];
    array[largest] = startPointValue;
    heapify(array, largest, max);
  }
};


heapSort(arr10);
heapSort(arr100);
heapSort(arr1000);
heapSort(arr10000);
