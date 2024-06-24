const searchingTheMinimum = (arr: number[]) => {
  let min = arr[0];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
};

console.log(searchingTheMinimum([5, 7, 16, -5, -22, 15, -2001, 900, -1000]));
