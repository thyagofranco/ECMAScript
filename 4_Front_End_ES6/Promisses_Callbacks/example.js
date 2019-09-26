// callback

function add (x , y) {
    return x + y;
}



function addFive (x, callback) {                    // higherOrderFunction (x , callback)
    return (callback(5, x))
}

console.log(addFive(10, add));


//