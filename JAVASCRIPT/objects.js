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
    {brand : 'Redmi', model : 'Note 11', price : 18000, colors : ['white', 'blue']}, 
    { brand : 'Samsung', model : 'M31', price : 19000, colors : ['white', 'blue', 'black'] },
    { brand : 'Realme', model : '8', price : 15000, colors : ['black', 'yellow'] },
    { brand : 'Oppo', model : 'F19', price : 17000, colors : ['blue', 'black', 'red'] },
    { brand : 'Vivo', model : 'V20', price : 20000, colors : ['black', 'red', 'green'] }
];

console.log(smartphoneList[0]);

//to access second color of the first smartphone

console.log(smartphoneList[0].colors[1]);

//to change the model of the first smartphone

smartphoneList[0].model= 'Note 10 pro',
console.log(smartphoneList[0]);

//to access price of 3rd smartphone

console.log(smartphoneList[2].price);


//to increase the price of the second smartphone by 10%

smartphoneList[1].price+= 0.1*smartphoneList[1].price;
console.log(smartphoneList[1].price);