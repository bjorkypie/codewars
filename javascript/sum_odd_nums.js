/*
Sum of Odd Numbers 7kyu

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  //two dimensionall array
  let oddArr = []
  let counter = 1
  // start at 1
  for(let i = 1; i <= n; i++){
    //iterate through n rows, clear each time
    oddArr = []
    for(let j = 1; j <= i; j++){
      //push odd numbers into array until n
      oddArr.push(counter)
      counter += 2
    }
  }
  // access array at index n and get row sum
  let sum = 0
  oddArr.forEach(num => sum += num)
  return sum
}
