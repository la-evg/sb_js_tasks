switch (sign) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      if (b != 0){
              console.log(a / b);
          break;
      }
      else {
      console.log("Делить на 0 нельзя!")}
  }