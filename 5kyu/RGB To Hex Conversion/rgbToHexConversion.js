function rgb(r, g, b) {
    // complete this function
    let hex = [r, g, b].map((n) => {
      if (n < 0) {
        return "00";
      } else if (n > 255) {
        return "FF";
      } else {
        return n.toString(16).padStart(2,'0').toUpperCase();
      }
    });
    return hex.reduce((acc, sum) => acc + sum);
  
  }