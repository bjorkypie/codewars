function overTheRoad(address, n){
    //Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
    let totalhouses = n * 2
    let steps
    //address is even?
    if(address % 2 === 0){
    steps = (totalhouses - address)/ 2
    return 1 + (steps * 2)
    }else if(address % 2 === 1){
    steps = (address - 1)/ 2
    return totalhouses - (2*steps)
    }
}