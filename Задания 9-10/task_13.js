
function every(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if ( !func(arr[i]) ) {
            return false
        }
    }
    return true;
};

function some(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if ( func(arr[i]) ) {
            return true
        }
    }
    return false;
};


// Ваш код тут
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

