const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

const primeArray = [];
for (let i = 0; i < numbers.length; i++) {
    let ct = 0;
    for (let j = 1; j <= numbers[i]; j++) {
        if (numbers[i] % j === 0) {
            ct++;
        }
    }
    if (ct == 2) {
        primeArray.push(numbers[i]);
    }
}

const maxPrime = Math.max(...primeArray);
const minPrime = Math.min(...primeArray);
const primeSum = primeArray.reduce((a, b) => a + b);

console.log("Prime Numbers: ", primeArray);
console.log("Max Prime: ", maxPrime);
console.log("Min Prime: ", minPrime);
console.log("Prime Sum: ", primeSum);
