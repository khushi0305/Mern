const smartphoneList = [
    {brand : 'Redmi', model : 'Note 11', price : 14000, colors : ['white', 'blue']}, 
    { brand : 'Samsung', model : 'M31', price : 12000, colors : ['white', 'blue', 'black'] },
    { brand : 'Realme', model : '8', price : 13000, colors : ['black', 'yellow'] },
    { brand : 'Oppo', model : 'F19', price : 17000, colors : ['blue', 'black', 'red'] },
    { brand : 'Vivo', model : 'V20', price : 20000, colors : ['black', 'red', 'green'] }
];

//WAP to create an array of brands

const brands = smartphoneList.map((phone) => {return phone.brand});
console.log(brands);

//WAP to store first color of each smartphone in array

const color= smartphoneList.map((colour) => {return colour.colors[0]});
console.log(color);

//WAP to filter the smartphones having price less than 15000

const money = smartphoneList.filter((phone) => {return phone.price<15000})
console.log(money);

//agar iske baad map krna ho toh alag se krna padega to print only the price ya any other key


console.log('----------------------------------------------------')


let search= 'samsung';
//WAP to filter smartphones having brand matching search

// const check= smartphoneList.filter((find) => {return find.brand===search})
// console.log(check);

const check= smartphoneList.filter((find) => {return find.brand.toLowerCase()===search.toLowerCase()})      //dono me .toLowerCase() lagayenge so that agar search me samSung bhi dediya toh wo same hi return kre
console.log(check);

console.log('--------------------------------------------------------');

//to find an element using substring use .includes()

let explore ='r';
const sub= smartphoneList.filter((find) => {return find.brand.toLowerCase().includes(explore.toLowerCase())})      
console.log(sub);

