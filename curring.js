var sum = 0;

function curry(param) {
    if(param){
        sum += param;
        return curry;
    }

    return sum;

}

console.log("The sum is : ", curry(1)(2)(3)(6)());
