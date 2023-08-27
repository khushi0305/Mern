const user = {
    name : 'Khushi',
    email : 'khushi@gmail.com',
    age : 20
};

console.log(user);

console.log(user.name);
console.log(user.age);

console.log(user['name']);

//to add new key:value pair

user.address= 'Lucknow';
user.age= 21;                           //updates the original value
console.log(user);


const smartphones = {
    brand : 'Redmi',
    model : 'Note 11',
    price : 18000,
    colors : ['white', 'red']
};

console.log(smartphones)

console.log('-----------');
//to access second element
console.log(smartphones.colors[1]);

//to store a new color
smartphones.colors.push('Blue')
console.log(smartphones.colors);


const smartphoneList = [
    {brand : 'Redmi', model : 'Note 11', price : 18000, colors : ['white', 'red'] }
];

console.log(smartphoneList[0]);

//to access second color of the first smartphone

console.log(smartphoneList[0].colors[1]);

//to change the model of the first smartphone

smartphoneList[0].model= 'Note 10 pro',
console.log(smartphoneList[0]);

//to access price of 3rd smartphone


//to increase the price of the second smartphone by 10%