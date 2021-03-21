/*
Jaden Casing Strings - 7kyu

Description:
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  //create new array to store words
  let wordsArr = this.split(' ');
  //create empty array for Jaden case words
  let jadenWords = [];
  //create variable to store Jaden case word
  let wordTitle;
  //check that string passed is not empty
  if(this.length > 0){
    //map the words to an array of jaden-cased words
    jadenWords = wordsArr.map((word, i) => {
      //split the words
      wordTitle = word.split('');
      //change first character to uppercase
      wordTitle[0] = wordTitle[0].toUpperCase();
      //return the joined word to mapped array
      return wordTitle.join('')
    });
    //join the mapped array for full jaden case string
    return jadenWords.join(' ')
  }else{
    //if string empty, return it
    return this
  }

};
