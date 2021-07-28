/*
Keep Hydrated - 8kyu

Description:
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

PARAMETERS
  time in hours Nathan will cycle
RESULTS
  number of litres nathan will drink, at a rate of 0.5 liters per hour
EXAMPLES
  litres(9) => 4
PSEUDOCODE
  return time cut in half, rounded down with floor Math method
*/

const litres = (time) => Math.floor(time/2)