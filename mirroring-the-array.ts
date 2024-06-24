const mirroringTheArray = (arr: number[]) => {
  const length = Math.floor(arr.length / 2);
  for (let i = 0; i < length; i++) {
    let [first, last] = [arr[i], arr[arr.length - 1 - i]];
    arr[i] = last;
    arr[arr.length - 1 - i] = first;
  }
  return arr;
};

console.log(mirroringTheArray([1, 2, 3, 4, 5, 6, 7, 8])); // [8, 7, 6, 5, 4, 3, 2, 1]
