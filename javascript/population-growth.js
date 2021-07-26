/*
Growth of a Population - 7kyu

Description:
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

PARAMETERS:
  beginning population as integer, percent annual increase, population change, target population
RESULTS:
  number of years it will take to reach a population equal to or greater than target
EXAMPLES:
  nb_year(1500, 5, 100, 5000) -> 15
  nb_year(1500000, 2.5, 10000, 2000000) -> 10
  nb_year(1000, 2, 50, 1200) => 3
PSUEDOCODE:
  convert percent to decimal
  declare current population variable which will change within loop, start at p0
  declare result variable to 0
  while loop, if current population is less than target
    add percent increase and static population change to current population
    iterate result variable
  return result
*/


function nbYear(p0, percent, aug, p) {
    const changeRate = percent / 100;
    let current = p0;
    let years = 0;
    while(current < p){
      current += (current * changeRate) + aug
      years++
    }
    return years
    
  }