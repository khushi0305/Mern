//call back function

const nums= [2,5,20,8,3,4,7];
//map
const ans = nums.map((n) => {return n**2});        // map me we change for each element

console.log(ans);


//filter
const ans2 = nums.filter((a) => {return a%2==0});           // filters selective elements

console.log(ans2);



//WAP tp filter prices less than 500 and greater than 200
const prices= [625, 100,77,384,274,405,899,1230];
const ans3= prices.filter((r) => {return (r<500) && (r>200)});
console.log(ans3);

//WAP to add 10% GST to all prices
const ans4= prices.map((g) => {return (g+(g*0.1))});
console.log(ans4);

const rawPrices = ['$7623.23', '$54.53', '$644.78', '$6576.45', '$67879.98'];
const ans5= rawPrices.map((m) => {return parseInt(m.slice(1))});
console.log(ans5);

