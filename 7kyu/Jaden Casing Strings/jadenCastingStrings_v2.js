String.prototype.toJadenCase = function () {
  //...
  return this.split(' ').map(word => word.replace(word[0],word[0].toUpperCase())).join(' ')
};
