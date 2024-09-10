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
for(let i = 1; i < 101; i++){

    // "most specific to most ambiguous"
    // if the iterator is divisible by 5 AND 3
    if(i % 5 === 0 && i % 3 === 0){
        // log out "Fizz Buzz"
        console.log(`${i}: Fizz Buzz`);
    }
    // if the iterator is only divisible by 3
    else if(i % 3 === 0){
        // log out "Fizz"
        console.log(`${i}: Fizz`);
    }
    // if the iterator is only divisible by 5
    else if(i % 5 === 0){
        // log out "Buzz"
        console.log(`${i}: Buzz`);
    }
    // otherwise if the iterator is does NOT fall into any of the cases above (NOT divisible by 3, 5, or both)
    else{
        // log out the number itself
        console.log(`${i}: ${i}`);
    }

} // end of Fizz Buzz for-loop block


/* ------------------ Part 2: Prime Time ------------------ */
console.log(`/* ------------------ Part 2: Prime Time ------------------ */`);

/* Objective: Write a script that accomplishes the following:
    Declare an arbitrary number, n.
    Create a loop that searches for the next prime number, starting at n and incrementing from there.
    As soon as you find the prime number, log that number and exit the loop.*/