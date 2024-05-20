const userIntInput = 15;

//console.log("I'm alive.");
console.log("We will calculate the Fibonacci value at f^" + userIntInput);

// Input from user will become userIntInput; it must be a whole # INT
// Output Fibonacci val at that place in the Fib sequence

// Fibonacci function to calculate the Fibonacci sequence up to a given position
function fibonacciNow(placeInSeq) {
    let previousValue = 1;
    let currentValue = 1;

    if (placeInSeq == 1 || placeInSeq == 2) {
        console.log(1);
    } else {
        console.log(1);
        console.log(1);
        for (let i = 3; i <= placeInSeq; i++) {
            const nextValue = previousValue + currentValue;
            console.log(nextValue);
            previousValue = currentValue;
            currentValue = nextValue;
        }
    }
}

fibonacciNow(userIntInput);

// Fibonacci sequence starting at position n=1
// 1, 1, 2, 3, 5, 8, 13, 21, 34

// Basic formulaf^n=f^(n-1)+f^(n-2)
