/*
HQ9+ - 8kyu

Description:
You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

If the input is 'H', return 'Hello World!'
If the input is 'Q', return the input
If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like song lyrics.
Anything else should return undefined.
*/
function HQ9(code) {
    switch(code){
    //input H case
        case 'H':
          return 'Hello World!'
    //input Q case
        case 'Q':
          return code
    //input 9 case
        case '9':
          let song = ''
          for(let i = 99; i > 2; i--){
            song += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
            }
          song += `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
          return song;
    //default    
        default:
          return undefined;
    }
    
  }