/*
Binary Addition - 7kyu

Description:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

function addBinary(a,b) {
    //add two integer arguments
    let sum = a + b;
    //declare variable for binary, using toString method with the optional argument, for base-2
    let binary = sum.toString(2);
    //return the result
    return binary;
}
