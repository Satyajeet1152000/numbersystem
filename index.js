const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];

const evens = numbers.filter((n) => n % 2 == 0);
const odds = numbers.filter((n) => n % 2 != 0);

console.log("Even Numbers:", evens);
console.log("Odd Numbers:", odds);
