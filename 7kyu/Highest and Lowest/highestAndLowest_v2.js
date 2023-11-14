function highAndLow(numbers){
  // ...
  const numArr = numbers.split(' ').map((n) => Number(n));
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}