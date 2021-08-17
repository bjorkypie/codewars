/*
Deodorant Evaporator - 7kyu

Description:
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

parameters: 
  content in milliliters, 
  percentage of foam/gas lost per day, 
  percentage point at which the evaporator is no longer useful
return:
  the day that the evaporator is no longer useful, once it reaches the percentage threshold
examples:
  evaporator(10,10,5) => 29 days
  evaporator(10,10,10) => 22 days
pseudocode:
  set a counter to 0
  set volume to 1st input
  while loop
    while volume > threshold * original volume
      increment the counter
      subtract evaporation for one day from current volume
  return counter
*/

function evaporator(content, evap_per_day, threshold){ 
    let counter = 0;
    let endVolume = (threshold/100) * content;
    while(content > endVolume){
      content -= (evap_per_day/100) * content;
      counter++;
    }
    return counter
  }