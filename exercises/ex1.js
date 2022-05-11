/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the 
two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
    if (data.length === 2) {
        return data[0] + data[1];
    } else {
        let largest = 0;
        let _2ndLargest = 0;
        for (let i = 0; i < data.length; i++) {
            const number = data[i];
            if (number > largest) {
                _2ndLargest = largest;
                largest = number;
            } else if (number > _2ndLargest) {
                _2ndLargest = number;
            }
        }
        return largest + _2ndLargest;
    }
};
  
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126