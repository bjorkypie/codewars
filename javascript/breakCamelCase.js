/*
Break camelCase - 6kyu

Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// complete the function
function solution(string) {
    let strCopy = string.split('').map((el, i, arr) => {
      //if next char toLowercase is not equal to original, add break
      return el.toLowerCase() !== el ? ` ${el}` : el;                    
    });
  //return joined array
  return strCopy.join('');  
}
