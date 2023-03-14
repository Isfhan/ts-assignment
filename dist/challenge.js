"use strict";
const plusMinus = (numbers) => {
    // Create three empty arrays to hold positive, negative, and zero numbers
    const positive = [];
    const negative = [];
    const zeros = [];
    // Iterate through each number in the input array using the forEach method
    numbers.forEach((number) => {
        // If the number is greater than 0, push it to the positive array
        if (number > 0) {
            positive.push(number);
        }
        // If the number is less than 0, push it to the negative array
        else if (number < 0) {
            negative.push(number);
        }
        // If the number is equal to 0, push it to the zeros array
        else {
            zeros.push(number);
        }
    });
    // Calculate the ratio of positive, negative, and zero numbers in the input array
    const positiveRatio = positive.length / numbers.length;
    const negativeRatio = negative.length / numbers.length;
    const zerosRatio = zeros.length / numbers.length;
    // Print the ratios to the console with 6 decimal places using the toFixed method
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zerosRatio.toFixed(6));
};
// Call the plusMinus function with two different input arrays to test the function
plusMinus([-1, -1, 0, 1, 1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
