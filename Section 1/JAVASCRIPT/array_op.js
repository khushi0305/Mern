const nums = [24, 67, 45, 82, 45, 74, 37];

for(let i=0; i<nums.length; i++){
    console.log( nums[i] );
};

console.log('------------------------');

for(let i of nums){
    console.log(i ** 2);
}

console.log('--------------');
// WAP to print only even numbers

for(let i of nums){
    if(i%2===0)
        console.log(i);
}

const names = ['Raju', 'Ramu', 'Shamu', 'Pinki'];

// convert all names to uppercase
console.log('ramu'.toUpperCase());