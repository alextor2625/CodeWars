function toWeirdCase(string){
    //TODO
    let weirdStrCase = string.split(' ').map(word => word.split('').map((char, index) => {
      return index%2 === 0? char.toUpperCase():char.toLowerCase();
    }).reduce((str,char) => str+char)).join(' ');
    return weirdStrCase;
  }