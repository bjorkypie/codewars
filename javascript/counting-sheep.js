/*
Counting Sheep - 8kyu

Description:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

function countSheeps(arrayOfSheep) {
    //filter trues and return array length
    let sheeps = arrayOfSheep.filter(isSheep => {
      //conditional oeprator to return true sheeps
      return isSheep ? true : false;
    })
    return sheeps.length;
  }