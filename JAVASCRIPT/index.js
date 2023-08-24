console.log('Hello JavaScript');

console.log('nice');

myname="Khushi";

console.log(myname);

num=6786;

console.log(num);

console.log(typeof num);

isLogggedIn = true;

console.log(typeof isLogggedIn);

age=23

if(age>=18){
    console.log("Eligible for DL")
}else{
    console.log("Not eligible for DL")
}

process.stdout.write('Same line 1')
process.stdout.write('Same line 2\n')      //prints in same line

// write a program to check if a number is divisible by 7 and 11

n= 637;

if(((n%7)==0)&&((n%11)==0)){
    console.log('divisible')
}
else if(n%7==0)
{
    console.log('Divisible by only 7')
}
else if(n%11==0){
    console.log('divisible by only 11')
}
else{
    console.log('not divisible')
}


console.log(345=='345')      //when you have to ignore the datatype
console.log(345==='345')    //when we want to compare datatypes too then we use three =
console.log(345===345)

console.log(56+34+'23')        //concatenation

console.log(4**2)           //Alternate of Math.pow

console.log(25**0.5)        //Alternate for square root

let name= "khushi"
let hobby='singing'

// console.log(~my name is ${name} and my hobby is ${hobby}~)