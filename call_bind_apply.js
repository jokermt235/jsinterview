var sum = function(a,b){
    var c = a + b;
    return c;
}

/*(function(){
    console.log("Hello World");
})();*/

// The call can take first param as any type even null
console.log(sum.call(null,10,2));


//Binds value accesed from outer of function 

var sum2 = function(args=null){
    if(args){
        return (this.a + this.b ) % args;
    }
    return this.a + this.b;
}

var param = {
    a : 10,
    b : 2
};
var bound = sum2.bind({a:1,b:2});

console.log(bound());

console.log(sum2.apply(param,[2]));
