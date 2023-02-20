console.log("closure")


// CLOSURE

function outerfunction(){
    function innerfunction(a){
        console.log(a)
    }
       return  innerfunction
}

let ans = outerfunction()("this is the value of A")

// ans("helow")
  

function hellow(x){
    const a = "var1"
    const b = "var2";

    return function(){
        console.log(a,b,x)
    }
}

const an1 = hellow("arg")()
 


function myfu(a){
    function sq(b){
        return a * b
    }
 return  sq
}

let ans1 = myfu(3);

console.log(ans1(3));

 function func(){
    let counter = 0;
    
    return function(){
        if(counter < 1){
            console.log("you call me")
            counter++
        }else 
        {
             console.log("main call hua hoon")
        }
    }


}

const myfunc = func();
myfunc()
myfunc()

 

