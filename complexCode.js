/* filename: complexCode.js */

// This code demonstrates a complex algorithm for finding prime numbers within a given range

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to find prime numbers within a range
function findPrimesInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Generate random start and end values
const start = Math.floor(Math.random() * 100) + 1;
const end = start + Math.floor(Math.random() * 100);

// Find prime numbers within the generated range
const primeNumbers = findPrimesInRange(start, end);

// Print the results
console.log(`Prime numbers between ${start} and ${end}:`);
primeNumbers.forEach((prime) => {
  console.log(prime);
});

// Perform some additional computations
let sum = 0;
primeNumbers.forEach((prime) => {
  sum += prime;
});
console.log("Sum of the prime numbers:", sum);

// Calculate average of the prime numbers
const average = sum / primeNumbers.length;
console.log("Average of the prime numbers:", average);