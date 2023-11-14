function highAndLow(numbers){
    // ...
    let numArr = numbers.split(' ').map((n) => Number(n));
    let max = numArr[0];
    let min = numArr[0];
    for(num of numArr){
      
      if(num > max){
        max = num;
      }
      if(num < min){
        min = num;
      }
    }
    return `${max} ${min}`
  }