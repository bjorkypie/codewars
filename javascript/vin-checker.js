/*
VIN Checker - 6kyu

Description:
Check whether VIN is valid.
Valid VINs are exactly 17 characters long, its composed of capital letters (except "I","O" and "Q") and digits. The 9th character is a MODULUS 11 check digit. Here is how it works:

1. Letters are converted to numbers
Following the table bellow, letters are converted to numbers. "I","O" and "Q" are invalid characters.

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
1 2 3 4 5 6 7 8   1 2 3 4 5   7   9 2 3 4 5 6 7 8 9
Ex.: VIN 5YJ3E1EA7HF000337 becomes 58135151786000337.

2. Each number is multiplied by a weight
The weights are the following: [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2].

Ex.:
VIN:     5   Y   J   3   E   1   E   A   7   H   F   0   0   0   3   3   7
DECODED: 5   8   1   3   5   1   5   1   7   8   6   0   0   0   3   3   7
WEIGHTS: 8   7   6   5   4   3   2   10  0   9   8   7   6   5   4   3   2
PRODUCT: 40  56  6   15  20  3   10  10  0   72  48  0   0   0   12  9   14
3. All products are summed up
Ex.:
40+56+6+15+20+3+10+10+0+72+48+0+0+0+12+9+14 = 315
4. The modulus 11 of the sum is taken
Ex.:
315 mod 11 = 7
5. Check 9th character
If the 9th character matches the modulus 11, the VIN is valid.

Ex.:
5YJ3E1EA7HF000337 is a valid VIN, 9th character is 7
Note
If the modulus 11 of the sum is equal to 10, then the digit is "X".

Ex.: 
5YJ3E1EAXHF000347 is a valid VIN.

PARAMETERS:
  string
RESULTS:
  boolean
EXAMPLES:
  '5YJ3E1EAXHF000347' => true
  '2409sjjwoejfsdj' => false
PSEUDOCODE:
  check input size and valid characters
  declare dictionary for letters
  declare weights array
  split string into array
    replace letters with associated dictionary listing value
    else convert to Number
  map through array to calculate weights and multiply
  calculate sum of products with reduce
  check sum modulus 11 with 9th character, condition for if sum is 10, digit is X
  return true
  else return false
*/


const checkVin = (vin) => {
    const dict = {
      'A':1,
      'B':2,
      'C':3, 
      'D':4, 
      'E':5, 
      'F':6, 
      'G':7, 
      'H':8, 
      'J':1, 
      'K':2, 
      'L':3, 
      'M':4, 
      'N':5, 
      'P':7, 
      'R':9, 
      'S':2, 
      'T':3, 
      'U':4, 
      'V':5, 
      'W':6, 
      'X':7, 
      'Y':8, 
      'Z':9 
    }
    const wt = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
    if(vin.length != 17 || vin.includes('I') || vin.includes('O') || vin.includes('Q')){
      return false;
    }else{
      let result = vin
        .split('')
        .map((el, i) => dict[el] ? dict[el] * wt[i] : Number(el) * wt[i])
        .reduce(((acc, c) => acc + c), 0) % 11;
      return (result == vin[8]) ? true : (result === 10 && vin[8] == 'X') ? true : false; 
    }
    return false;
  };