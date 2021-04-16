/*
Twice as Old - 8kyu

Description:
Your function takes two arguments:
  current father's age (years)
  current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  //get difference between son and father's age, double and subtract from father's age;
  let yearsTwice = dadYearsOld - ((dadYearsOld - sonYearsOld) * 2)
  //return absolute value of difference
  return Math.abs(yearsTwice)
}
