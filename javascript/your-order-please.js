/*
Your Order, Please - 6kyu

Description:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words){
  //split string into words
  let wordArr = words.split(' ');
  //array from filter
  let orderedArr = [];
  wordArr.forEach(word => {
    //iterate through chars
    for(let i = 0; i < word.length; i++){
      //check if matches int 1-9
      switch(word[i]){
        case '1':
          //push the number to the ordered array
          orderedArr.push(word[i])
          break;
        case '2':
          orderedArr.push(word[i])
          break;
        case '3':
          orderedArr.push(word[i])
          break;
        case '4':
          orderedArr.push(word[i])
          break;
        case '5':
          orderedArr.push(word[i])
          break;
        case '6':
         orderedArr.push(word[i])
          break;
        case '7':
          orderedArr.push(word[i])
          break;
        case '8':
          orderedArr.push(word[i])
          break;
        case '9':
          orderedArr.push(word[i])
          break;
      }
    }
  })
  //sort the ordered array of numbers
  orderedArr.sort((a, b) => {
    return a - b;
  })
  //push the words in orderd to new array
  let newArr = []
  orderedArr.forEach(num => {
    wordArr.forEach(word => {
      //push word if it contains the number from ordered array
      if(word.includes(num)){
        newArr.push(word)
      }
    })
  })
  //return joined string
  return newArr.join(' ')

}
