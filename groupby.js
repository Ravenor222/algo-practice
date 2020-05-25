
const groupby = (array, func, bag={}) => {
    if (array.length === 0 ) {return bag};
    
    let matches = array.filter( x => func(x) === func(array[0]));
    let rest = array.filter( x => func(x) !== func(array[0]));
    return(
        groupby(rest, func, {...bag, ...{[func(array[0])]: matches}})
    )

};


console.log(groupby([6.1, 4.2, 6.3], Math.floor))