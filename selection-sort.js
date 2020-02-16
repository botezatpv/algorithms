const selectionSort = (array) => {
  for(let i = array.length - 1; i >= 1; i--) {
    const maxPos = maxPostion(array, 0, i);
    if (maxPos != i) {
      const temp = array[i];
      array[i] = array[maxPos];
      array[maxPos] = temp;
    }
  }
  console.log(array);
};

const maxPostion = (array, left, right, position) => {
  let maxPos = 0;
  for (let i = 0; i < right + 1; i++) {
    if (array[i] > array[maxPos]) {
      maxPos = i;
    }
  }

  return maxPos;
}

selectionSort([4, 3, 2, 1]);