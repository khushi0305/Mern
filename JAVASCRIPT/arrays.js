const movies= ['KGF', 'RRR', 'FastX', 'Barbie', 'Tubelight', 'DreamGirl'];

console.log(movies.length);     //also works with strings

//indexing
console.log(movies[4]);         //also works with strings

console.log(movies[2]);

console.log(movies.at(-2));      //(for reverse indexing)also works with strings

console.log(typeof movies);

//slicing - accessing more than one element

console.log(movies.slice(2,5));      //also works with strings
console.log(movies.slice(2));
console.log(movies.slice(2, 100));

//adding elements

movies.push('Dangal');          //adds element at end of array
movies.unshift('Koi Mil Gaya')      // adds element at start of array

console.log(movies);

//removing elements

movies.pop();                  //removes element from end of array
movies.shift();                //removes element from start of array

console.log(movies);

movies.splice(3,2);            //(kahan se remove krna hai, kitne elements remove krne hain)

console.log(movies);

const nums =[34, 12, 65, 18, 89, 23, 29];

nums.splice(3,3);
console.log(nums);

console.log( ...movies );            //... array se element ko bahar nikaalta hai(spread operator) now you can use these elements in other array
console.log(movies);

console.log([ 'first', ...movies, 'last' ]);     // using spread operator we can add more items in the array with affecting the actual array

console.log([ ...movies.slice(0,2), movies.at(-1)]);