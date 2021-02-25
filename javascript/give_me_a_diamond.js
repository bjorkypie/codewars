/*
Give Me A Diamond 6kyu

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

e.g.
A size 3 diamond:
 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:
  *
 ***
*****
 ***
  *

appears as "  *\n ***\n*****\n ***\n  *\n"

*/

function diamond(n){
  //set empty string
  let diam = ''
  //check for valid num
  if(n < 0 || n % 2 === 0){
    return null
  }else{
    //set space, asterik char variables
    let space = ' '
    let ast = '*'
    //set asterik count at 1
    let astCount = 1
    //loop through diamond midway point; counter as increases space
    for(let i = (n-1)/2; i >= 0; i--){
      //add to string
      diam += space.repeat(i) + ast.repeat(astCount) + '\n'
      //increase asterik count
      astCount += 2
    }
    //undo last asterik count add
    astCount -= 2
    //loop through bottom half of diamond; counter as decreases space
    for(let j = 1; j <= (n-1)/2; j++){
      //decrease asterik count
      astCount -= 2
      //add to string
      diam += space.repeat(j) + ast.repeat(astCount) + '\n'
    }
  }

  return diam;
}
