//Assignment 2(24/8/23):

//WAP to square all elements of an array and store them into a new array

const n= [20, 35, 14, 67, 90];
let num=[];
for(let i=0; i< n.length; i++)
// {
// //     num[i]= n[i]**2;
// // }
// // for(let i=0; i< num.length; i++){
// // console.log(num[i]);}
{
    num.push(n[i]**2);
}
console.log(num);



console.log('----------------------');
//WAP to store all even numbers from an array to a new array

const ar= [20, 35, 14, 67, 90];
let even=[];
for(let i=0; i< ar.length; i++){
    if(ar[i]%2 == 0)
    even[i]= ar[i];
}
for(let i=0; i< even.length; i++){
    console.log(even[i]);
}



