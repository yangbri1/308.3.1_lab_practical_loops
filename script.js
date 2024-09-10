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


// intialize variable for later use in the while loop
let n = 3;

// iterate via loop as long as the integer is non-negative 
while(n > 0){

    // declare 'nplus' variable to check on closest number above 'n'
    let nplus = n + 1;

    // if n is integers 2 or 3
    if(nplus === 2 || nplus == 3){
        // logs out it's a prime
        console.log(`${nplus} isA prime`);
        // breaks out out whole loop completely -- next iteration DN start
        break;
    }
    // if n is a multiple of 2, 3, 5, 7, ... 11, 13, 17, 19, 23, ... (prime)
    else if((nplus % 2 != 0) && (nplus % 3 !== 0) && (nplus % 5 !== 0) && (nplus % 7 !== 0)){
        // log out confirming n is a prime
        console.log(`${nplus} isB prime`);
        // break current iteration 
        break;
    
    }
    // increment up by 1 if neither of the if cases are hit
    n++;

} // end of while loop


/* ------------------ Part 3: Feeling Loopy ------------------ */
console.log(`/* ------------------ Part 3: Feeling Loopy ------------------ */`);
