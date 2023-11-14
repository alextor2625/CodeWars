decodeMorse = function(morseCode){
    // Your code here
    // You can use MORSE_CODE[morse]
    let morse = morseCode.split(' ');
    while(morse[0] === ''){
      morse.shift();
    }
    while(morse[morse.length-1] ===''){
      morse.pop();
    }
    let decoded = '';
    for(let i = 0; i<morse.length;i++){
      if(morse[i] === ''){
        decoded+=' '
        i++;
        continue;
      }
      decoded+=MORSE_CODE[morse[i]];
      
    }
    return decoded;
  }