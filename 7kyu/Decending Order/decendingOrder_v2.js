function descendingOrder(n){
  //...
  return +n.toString().split('').sort().reverse().map(Number).join('')
}
