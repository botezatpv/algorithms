const generateRandomArray = (length, range = 1000, onlyWholeNumbers = true) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    const number = Math.random() * range;
    array.push(onlyWholeNumbers ? Math.floor(number) : number);
  }
  return array;
}
const algorithmTimes = {};
const arr10 = generateRandomArray(10);
const arr100 = generateRandomArray(100);
const arr1000 = generateRandomArray(1000);
const arr10000 = generateRandomArray(10000);