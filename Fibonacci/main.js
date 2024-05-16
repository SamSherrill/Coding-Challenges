const fibVal1 = 1;
const fibVal2 = 1;
const userIntInput = 5;

// Input from user will become userIntInput; it must be a whole # INT
// Output Fibonacci val at that place in the Fib sequence

function fibonacciNow(previousValue, currentValue, placeInSeq) {
  if (placeInSeq == 1 || placeInSeq == 2) {
    console.log(1);
  } else {
    console.log(1);
    console.log(1);
    for (let i = 3; i <= placeInSeq; i++) {
      a = previousValue;
      b = currentValue;
      currentValue = a + b;
      previousValue = b;
      console.log(currentValue);
    }
  }
}

console.log("I'm alive.");

fibonacciNow(fibVal1, fibVal2, userIntInput);
// 1, 1, 2, 3, 5, 8, 13, 21, 34