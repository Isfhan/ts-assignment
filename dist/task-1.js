"use strict";
// Define the variables for English and Urdu marks
let englishMarks = 80;
let urduMarks = 70;
// Calculate the average of the two marks
let averageMarks = (englishMarks + urduMarks) / 2;
// Declare grade variable
let grade;
// Determine the grade based on the average marks
if (averageMarks >= 80) {
    grade = 'A';
}
else if (averageMarks >= 70 && averageMarks < 80) {
    grade = 'B';
}
else if (averageMarks >= 60 && averageMarks < 70) {
    grade = 'C';
}
else {
    grade = 'F';
}
// Print the grade to the console
console.log('Your Grade is =' + ' ' + grade);
