
const makeChange = (amount, coins, bag = []) => {
    if(amount===0) {return bag};
    let largest = getLargest(amount,coins);
    return makeChange(amount-largest, coins, bag.concat([largest]))



};

const getLargest = (amount,coins) => {
    let sorted = coins.sort((a,b) => a - b)
    for(let i = sorted.length - 1; i >= 0 ; i--) {
        if(sorted[i] <= amount) {
            return sorted[i]
        }
    }
    throw new Error('No dividable coines')
};

console.log(makeChange(37, [1,5,10,20]))