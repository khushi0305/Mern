//WAP to print Fibonacci series
n=10
let p = 0, q = 1, r;
  console.log(p);
  console.log(q);
  for (let i = 2; i < n; i++) {
    r = p + q;
    console.log(r);
    p = q;
    q = r;
  }

  //WAP to check if a no. is perfect square

  // let x=49;
  // let sqrt=x**0.5;




  //using while loop
  let [a, b] = [0, 1];
process.stdout.write(`${a} `);
process.stdout.write(`${b} `);
let c = a+b;

while(c<50){
    process.stdout.write(`${c} `);
    // a = b;
    // b = c;
    [a, b] = [b, c]
    c = a+b;
}

console.log();

// WAP to check if a number is perfect square
let num = 35;
let sqrt = num**0.5;

console.log(sqrt % 1);

if(sqrt % 1 == 0){
    console.log('Perfect square');
}else{
    console.log('Not a perfect square');
}

console.log(sqrt === parseInt(sqrt));


// Check if a number if prime

let m = 77;
let isPrime = true;

for(let i=2; i<m**0.5; i++){
    if(m%i===0){
        console.log('not prime');
        isPrime = false;
        break;
    }
}

if(isPrime) console.log('prime');

// Pyramid pattern

console.log( 'abc'.repeat(10) );

for(let i=1; i<=10; i++){

    process.stdout.write(' '.repeat(10-i));
    process.stdout.write('* '.repeat(i));

    console.log();

}
  


