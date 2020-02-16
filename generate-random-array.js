const generateRandomArray = (length, range = 1000, onlyWholeNumbers = true) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    const number = Math.random() * range;
    array.push(onlyWholeNumbers ? Math.floor(number) : number);
  }
  return array;
}