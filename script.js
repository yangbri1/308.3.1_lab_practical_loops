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
// let n = 3;

// // iterate via loop as long as the integer is non-negative 
// while(n > 0){

//     // declare 'nplus' variable to check on closest number above 'n'
//     let nplus = n + 1;

//     // if n is integers 2 or 3
//     if(nplus === 2 || nplus == 3){
//         // logs out it's a prime
//         console.log(`${nplus} isA prime`);
//         // breaks out out whole loop completely -- next iteration DN start
//         break;
//     }
//     // if n is a multiple of 2, 3, 5, 7, ... 11, 13, 17, 19, 23, ... (prime)
//     else if((nplus % 2 != 0) && (nplus % 3 !== 0) && (nplus % 5 !== 0) && (nplus % 7 !== 0)){
//         // log out confirming n is a prime
//         console.log(`${nplus} isB prime`);
//         // break current iteration 
//         break;
    
//     }
//     // increment up by 1 if neither of the if cases are hit
//     n++;

// } // end of while loop


/* ------------------ Part 3: Feeling Loopy ------------------ */
console.log(`/* ------------------ Part 3: Feeling Loopy ------------------ */`);

/* Objective: Your task is to write a script that accomplishes the following:
    Loop through the characters of a given CSV string.
    Store each “cell” of data in a variable.
    When you encounter a comma, move to the next cell.
    When you encounter the “\r\n” sequence, move to the next “row.”
    Log each row of data.
    
    You do not need to format the data, the following works well.
        console.log(cell1, cell2, cell3, cell4);
    There will only be 4 cells per row.
    There will be no escaped characters other than “\n” */

const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26`; // backticks disregards escape characters

let row = "";

let cell = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let c1_spot, c2_spot, c3_spot, c4_spot;
let comma_counter = 0;


// for(let i = 0; i < str.length; i++){

//     // gets charaters up to newline 
//     if(str[i] !== '\n'){
//         row += str[i];
//     }
//     // else if()
//     else{
//         // row += '\r';
//         break;
//     }

// }
// console.log(row);

// for(let j = 0; j < row.length; j++){
//     if(row[j] !== ','){
//         cell1 += row[j];
//     }
//     else{
//         if(cell2 === ""){
//             cell2 === cell1;
//             j++;
//             continue;
//         }
//         else if(cell3 === ""){
//             cell3 === cell1;
//             j++;
//             continue;
//         }
//         else if(cell4 === ""){
//             cell4 === cell1;
//             j++;
//             continue;
//         }
        
//     }
// }
// console.log(cell1);

// loop through the given string character by character
let i = 0

function grab_line(i, row){
    for (; i < str.length; i++) {
        // encountering the newline escape character
        if (str[i] === '\n') {
            break;
            
        }
        else{
            row += str[i];
        }
    
    }
    return row;
}
// row = grab_line(i, row);
// i += row.length;
// console.log(i, row);

// NOTICE: Decided to use a while loop so the ITERATOR could be used in later while loops
//         as in saves the index in place 
function make_cells(row, cell1, cell2, cell3, cell4){
    let j = 0;
    while(j < row.length){
        if(row[j] === ','){

            if(cell2 === ""){
                cell2 = cell1;
            }
            else if(cell3 === ""){
                cell3 = cell1;
            }
            else if(cell4 === ""){
                cell4 = cell1;
            }
            cell1 = "";
        }
        else{
            cell1 += row[j];
        }
        j++;
    }
    return(console.log(cell2, cell3, cell4, cell1));
}

row = grab_line(i, row);
i += row.length;
console.log(i, row);
make_cells(row, cell1, cell2, cell3, cell4);


// cell1 is last as it passed the values to the others first
//console.log(cell2, cell3, cell4, cell1); 


// --------------------------------------------------------------------------
// //console.log(cell1);
// console.log(j);

// while(j < row.length){
//     if(row[j] === ','){
//         j++;
//         break;
//     }
//     else{
//         cell2 += row[j];
//     }
//     j++;
// }
// //console.log(cell2);
// console.log(j);

// while(j < row.length){
//     if(row[j] === ','){
//         break;
//     }
//     else{
//         cell3 += row[j];
//     }
//     j++;
// }
// //console.log(cell3);
// console.log(j);

// while(j < row.length){
//     if(row[j] !== ','){
//         cell4 += row[j];
//     }
//     j++;
// }
// //console.log(cell4);
// console.log(j);

// console.log(cell1, cell2, cell3, cell4);

// console.log(i);

// copy pasta of the code block above ----- it will work but what if string is bigger(more rows)? dynamic sizing req.
// requires counting "\n" to get number of rows -- while loop, for-of loop
// cache a row into an empty str --- like above 
// iterate via the row while, caching char to each cell while delinating via commas

// row = "";
// let k = i + 1
// for(; k < str.length - i; k++){
//     if(str[k] === '\n'){
//         console.log(row);
//         break;
//     }
//     else{
//         row += str[k];
//     }

// }

