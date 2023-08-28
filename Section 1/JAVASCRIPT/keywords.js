n=34;

if(n%2===0){
    message='nice'      //even if this local variable is in a block yet in javascript it will work as global variable as it is printing outside the block

    let newMessage= 'wow'      //since variable is local it will not be printed 

    const pi= 3.14;
    console.log(pi)
    // pi=554.647;

    console.log('Even')
}else{
    console.log('Odd')
}
console.log(message)
// console.log(newMessage)
// console.log(pi)