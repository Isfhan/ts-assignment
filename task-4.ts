const getFactorial = (number: number = 1): number => {

    // Initialize a variable called total with a value of 1
    let total: number = 1;

    // Create a for loop that starts from the number and decrements by 1 until it reaches 1
    for (let i = number; i > 0; i--) {

        // Multiply the total variable by i in each iteration
        total = total * i;
    }

    // Return the final value of the total variable
    return total;
}

// Call getFactorial function with different arguments and log the results
const factorialOfFive = getFactorial(5);
console.log("Factorial of 5 = " + factorialOfFive);

const factorialOfThree = getFactorial(3);
console.log("Factorial of 3 = " + factorialOfThree);

const factorialOfSeven = getFactorial(7);
console.log("Factorial of 7 = " + factorialOfSeven);

