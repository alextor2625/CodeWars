function narcissistic(value) {
    // Code me to return true or false
    let stringVal = value.toString();
    let stringValArr = stringVal.split('');
    let squaredValArr = []
    stringValArr.forEach(val => {
      squaredValArr.push(Number(val)**stringVal.length);
    });
    let sum = 0;
    squaredValArr.forEach(val => {sum+=val})
    return sum === value? true:false;
  }