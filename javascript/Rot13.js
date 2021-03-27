/*
Rotate 13 - 5kyu

Description:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
  //map chars from split string
  let result = message.split('').map(char => {
    //if lowercase alphabet: a-z == 97 - 122
    if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
      return char.charCodeAt(0) + 13 <= 122 ? String.fromCharCode(char.charCodeAt(0) + 13) : String.fromCharCode(char.charCodeAt(0) - 13);
    }else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
      //if upper case alphabet: A - Z == 65 - 90
      return char.charCodeAt(0) + 13 <= 90 ? String.fromCharCode(char.charCodeAt(0) + 13) : String.fromCharCode(char.charCodeAt(0) - 13);
    }else{
      //if not alphabet, keep same
      return char
    }
  })
  return result.join('');
}
