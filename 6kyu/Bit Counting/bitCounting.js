var countBits = function(n) {
    // Program Me
    return +n.toString(2).split("").reduce((acc,sum)=> +acc + +sum)
  };