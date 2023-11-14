function squareDigits(num){
    let sqrdNum = num.toString().split('').map((n) => {
      let sqrd = Number(n)**2;
      return sqrd.toString();
    }).reduce((acc,curr) => acc + curr);
    return Number(sqrdNum);
  }