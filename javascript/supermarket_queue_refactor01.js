/*
Supermarket Queue 6kyu

Description:
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

output
The function should return an integer, the total time required.
*/

function queueTime(customers, n) {
  //set an array of length n with empty tills
  let tills = new Array(n).fill(0)
  //declare next Till
  let nextTill
  //loop through customers
  customers.forEach(customer =>{
    //find the index of next till open
    nextTill = tills.indexOf(Math.min(...tills))
    //add customer's time to that till total
    tills[nextTill] += customer
  })
  //return the highest till time after all customers served
  let totalTime = Math.max(...tills)
  return totalTime
}
