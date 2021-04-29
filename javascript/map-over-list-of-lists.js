/*
Map Over List of Lists - 7kyu

Description:

Write a function which maps a function over the lists in a list:
function gridMap(fn,xss) { return [[]]; }

Example 1:

const xss = [ [1,2,3]
            , [4,5,6]
            ];

gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]
Example 2

const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]

*/

function gridMap(fn,a) {
  //map outer list
  let newMap = a.map(array => {
    //map inner list items with function argument
    return array.map(listItem => {
      //apply argument function to inner list items
      return fn(listItem);
    })
  })
  return newMap;
}
