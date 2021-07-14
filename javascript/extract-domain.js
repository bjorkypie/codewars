/*
Extract the Domain Name from a URL - 5kyu

Description:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

Parameters: string
Result: string that only contains domain - get rid of rest of the path
Examples: see above
Pseudocode: replace from an array, or replace beginning paths, then split by '.' and return first array element
*/

function domainName(url){
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.').shift()
  }