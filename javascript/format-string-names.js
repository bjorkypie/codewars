/*
Format a String of Names like 'Bart, Lisa & Maggie' - 6kyu

Description: 
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

function list(names){
    let result = '';
    //loop through objects and concatenate
    names.forEach((el, i, arr) => {
      result += arr.length < 2 ? el.name : i < arr.length - 2 ? `${el.name}, ` : i < arr.length - 1 ? el.name : ` & ${el.name}`
    })
    return result;
  }