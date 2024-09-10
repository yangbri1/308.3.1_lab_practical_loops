// ####################################
// # Lab 308.3.1: Practical Loops
// # Brian Yang
// # Submit Github Link to Canvas
// ####################################

/* ------------------ Part 1: Fizz Buzz ------------------ */
console.log(`/* ------------------ Part 1: Fizz Buzz ------------------ */`);

/* Objective : Accomplish the following:
    Loop through all numbers from 1 to 100.
    If a number is divisible by 3, log “Fizz.”
    If a number is divisible by 5, log “Buzz.”
    If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    If a number is not divisible by either 3 or 5, log the number.*/

// iterate through the for loop 100 times ...
// for(let i = 1; i < 101; i++){

//     // "most specific to most ambiguous"
//     // if the iterator is divisible by 5 AND 3
//     if(i % 5 === 0 && i % 3 === 0){
//         // log out "Fizz Buzz"
//         console.log(`${i}: Fizz Buzz`);
//     }
//     // if the iterator is only divisible by 3
//     else if(i % 3 === 0){
//         // log out "Fizz"
//         console.log(`${i}: Fizz`);
//     }
//     // if the iterator is only divisible by 5
//     else if(i % 5 === 0){
//         // log out "Buzz"
//         console.log(`${i}: Buzz`);
//     }
//     // otherwise if the iterator is does NOT fall into any of the cases above (NOT divisible by 3, 5, or both)
//     else{
//         // log out the number itself
//         console.log(`${i}: ${i}`);
//     }

// } // end of Fizz Buzz for-loop block


/* ------------------ Part 2: Prime Time ------------------ */
console.log(`/* ------------------ Part 2: Prime Time ------------------ */`);

/* Objective: Write a script that accomplishes the following:
    Declare an arbitrary number, n.
    Create a loop that searches for the next prime number, starting at n and incrementing from there.
    As soon as you find the prime number, log that number and exit the loop.
    
    Continuing with the example above, 
    if n is equal to 4, your loop should log 5. 
    Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. 
    Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
    Be careful! If you set n to a number too large, your loop could take a long time to process.*/

let n = 5;
let nplus = n + 1;
while(n > 1){
    
    if(n === 2 || n === 3){
        console.log(`${n} is prime too`);
    }
    else if(n % 2 !== 0 && n % 3 !== 0){
        console.log(`${n} is prime`);
        nplus++;
    }
    n++;
}


// while(nplus > 0){
//     if(nplus % 2 != 0 && nplus % 3 !== 0){
//         console.log(`${nplus} is prime`);
//         break;
//     }
//     nplus++;
// }

// for(let n = 4; n > 1; n++){
//     if(n % 2 !== 0 && n % 3 !== 0){
//         console.log(`${n} is prime`);
//     }
//     else if(n === 2 || n == 3){
//         console.log(`${n} is prime as well`);
//     }
//     else{
//         console.log(`${n} is not prime`);
//     }
//     break;

// }