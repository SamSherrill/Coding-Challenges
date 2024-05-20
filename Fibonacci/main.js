const userIntInput = 6;

//console.log("I'm alive.");
console.log("The Fibonacci value at f^" + userIntInput + " is:");

// Input from user will become userIntInput; it must be a whole # INT
// Output Fibonacci val at that place in the Fib sequence

// Fibonacci function to calculate the Fibonacci sequence up to a given position
function fibonacciNow(placeInSeq) {
    let previousValue = 1;
    let currentValue = 1;

    if (placeInSeq < 0) {
        console.log("The input must be a positive whole number.");
        return;
    }

    if (placeInSeq === 0) {
        console.log(0);
        return 0;
    }

    if (placeInSeq === 1) {
        console.log(1);
        return 1;
    }

    if (placeInSeq === 2) {
        console.log(1);
        console.log(1);
        return 1;
    }

    for (let i = 3; i <= placeInSeq; i++) {
        const nextValue = previousValue + currentValue;
        previousValue = currentValue;
        currentValue = nextValue;
    }

    console.log(currentValue);
    return currentValue;
}

fibonacciNow(userIntInput);

// Fibonacci sequence starting at position n=1
// 1, 1, 2, 3, 5, 8, 13, 21, 34

// Basic formulaf^n=f^(n-1)+f^(n-2)
