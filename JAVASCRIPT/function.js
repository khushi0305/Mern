// using function keyword
function addNums(a, b) {
    var c=a+b;
    console.log(c);
};

addNums(23,67);

// console.log(c);

//using function keyword and assignment operator

const getPercent = function (m1, m2, m3, m4=70){        //call back function ANONYMOUS FUNCTION
    console.log(m1, m2, m3, m4);
    let total = m1+m2+m3+m4;
    let percent= total/4;

    return percent;               //return k neeche kuch bhi lagaoge wo nahi chalega gets fade
    // console.log(percent);
    
    // return percent;
}

const result = getPercent(78, 89, 60, 90);         // if m4 not defined here so it will give undefined and NaN

console.log(result);

// arrow function

const fact = (n) => {
    let f = 1;

    for(let i=2; i<=n; i++){
        f*= i;
    }
    return f;
}

// const factorial = fact(5);
// console.log(factorial);

console.log(fact(5));

// console.log(f);

