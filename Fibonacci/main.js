const previousValue = 0;
const currentValue = 1;
const placeInSeq = 10;

// Input for user is placeInSeq
// Output Fibonacci val at that place

function fibonacciNow (previousValue, currentValue, placeInSeq) {
    for (let i = 0; i <= placeInSeq; i++) {
        currentValue = previousValue + currentValue;
        console.log(currentValue);
    }
}


// 1, 1, 2, 3, 