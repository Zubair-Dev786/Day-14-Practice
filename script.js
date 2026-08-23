// Check Prime Number


// let number = 1;
// let isPrime = true;

// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         isPrime = false;
//     }
// }
// if (isPrime === true) {
//     console.log("Prime Number");

// } else {
//     console.log("Normal Number");

// }


//  Count Vowels in Text

// let text = "Hello World";
// let count = 0;

// for(let i = 0; i < text.length; i++){
//     if (text[i] === "A" || text[i] === "a" ||
//         text[i] === "E" || text[i] === "e" ||
//         text[i] === "I" || text[i] === "i" ||
//         text[i] === "O" || text[i] === "o" ||
//         text[i] === "U" || text[i] === "u"
//     ) {
//         count++
//     }
// }
// console.log(count);

// Second Largest Number


// let numbers = [3, 7, 2, 9, 4, 1];
// let largestNumber = numbers[0];
// let secondLargestNumber = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//         if (numbers[i] > secondLargestNumber) {
//             secondLargestNumber = largestNumber;
//             largestNumber = numbers[i];
//         }
//     }
// }
// console.log(secondLargestNumber);

// Find Even Numbers


// let numbers = [12, 7, 4, 19, 8, 3, 10];
// let newNumbers = [];
// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] %2 === 0) {
//         newNumbers.push(numbers[i])
//     }
// }
// console.log(newNumbers);

// Count Vowels


// function countVowels(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         let Vowels = ["A","a","E","e","I","i","O","o","U","u"]
//         if (Vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(countVowels("javascript"));

// Find Largest Number with Function


// function findLargest(numbers) {
//     let largestNumber = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if (numbers[i] > largestNumber) {
//             largestNumber = numbers[i];
//         }
//     }
//     return largestNumber
// }
// console.log(findLargest([12, 45, 7, 89, 23]));

// Remove Dublicates


// let numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];
// let number = [];

// for(let i = 0; i < numbers.length; i++){
//     if (!(number.includes(numbers[i]))) {
//         number.push(numbers[i])
//     }
// }
// console.log(number);

// function calculateTotal(numbers) {
//     let total = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }

//     return total;
// }

// console.log(calculateTotal([10, 20, 30, 40]));

// let text = document.getElementById("textInput");
// let counter = document.getElementById("count");
// let button = document.getElementById("btn");

// function totalCharacters() {
//     let count = 0;

//     for (let i = 0; i < text.value.length; i++) {
//         if (text.value[i] !== " ") {
//             count++
//         }

//     }
//     counter.textContent = count;

// }
// button.onclick = totalCharacters;

