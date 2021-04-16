/*
Switcheroo - 7kyu

Description:
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
  //split string
  let xArr = x.split('');
  //iterate through array and switch letters
  let newArr = xArr.map(letter => {
    if(letter === 'a'){
      return 'b';
    }else if(letter === 'b'){
      return 'a';
    }else{
      return letter;
    }
  })
  //join and return edited array
  return newArr.join('')
}
