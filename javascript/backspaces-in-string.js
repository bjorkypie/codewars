/*
Backspaces in String - 6kyu

Description:

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

function cleanString(s) {
  //substring to delete
  let toDelete = '#';
  //isolate hash character
  let hash = '#';
  //while the string includes the hash character
	while(s.includes(hash)){
    //if hash is not the first character
    if(s.indexOf(hash) > 0){
      //set substring to delete to include hash and preceding char
      toDelete = s.slice((s.indexOf(hash) - 1), (s.indexOf(hash) + 1));
    }else{
      //just delete hash at index 0
      toDelete = '#';
    }
    //replace substring with empty string
    s = s.replace(toDelete, '');
  }
  return s;
};
