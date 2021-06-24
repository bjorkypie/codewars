function overTheRoad(address, n){
    //Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
    let evenArray = []
    let oddArray = []

    for(let i = (n*2) - 1; i > 0; i -= 2){
        oddArray.push(i)
    }
    for(let j = 2; j <= n*2; j+=2){
        evenArray.push(j)
    }
    console.log(evenArray)
    console.log(oddArray)
    //address is even?
    if(address % 2 === 0){
        return oddArray[evenArray.indexOf(address)]

    }else if(address % 2 === 1){
        return evenArray[oddArray.indexOf(address)]
    }

    //distance from the first house on the street
    //even, decreasing by 2 from the last house number
    //odd, increasing by 2 from 1*/
}