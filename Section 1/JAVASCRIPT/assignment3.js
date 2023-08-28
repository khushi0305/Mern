//Assignment (27/8):

//WAP to get first name from an array of full names

const names= ["ram vdgd", "grhtr ngh", "gerfn kiuuk", "rhfjyt tjtyj", "rt b"];
const first= names.map((n) => {return n.trim().split(' ')[0]} )
console.log(first);


//WAP to filter name having length greater than 4

const length = names.filter((l) => {return l.length>4});
console.log(length);