String.prototype.toJadenCase = function () {
  //...
 
  return  this.split(' ').map(word => {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    return word.join('');
  }).join(' ');
};
