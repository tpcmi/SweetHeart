'use strict'
var arr = [1, 3, 5, 7, 9];

function pow(x,y){
    return 10*x+y
}
var out = arr.reduce(pow)
console.log(out);