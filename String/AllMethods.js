var str = "Royal technosoft pvt ltd";
// index   12345467
console.log(str);

// property 
//1) length
console.log(str.length);

// Methods  
// 1) str.charAt()   : use for which char exist specific index
// return char / ''
console.log(str.charAt(100));


// 2) str.charCodeAt(); : use for find out ASCII Value for specific index char.
// return number / NaN
console.log(str.charCodeAt(100));


// 3) str.concat()
console.log(str.concat(" Royal"," Zafar"));


// 4) str.startsWith()  : true/false
console.log(str.startsWith('R'));


// 5) str.endsWith() //true/false
console.log(str.endsWith('ltd'));

// 6) str.includes() //true/false
console.log(str.includes('pvt'));


// 7) str.indexOf()
console.log(str.indexOf('o'));


// 8) str.lastIndexOf()
console.log(str.lastIndexOf('o'));


// 9) str.replace()
console.log(str.replace('pvt','p'));

console.log(str.replace('o',1));


// 10) str.replaceAll()
console.log(str.replaceAll('o',1));


//////////////////////////////////////////////////////


// 1. **length**
//    - Write a program to determine if a given string's length is even or odd.
//    - Create a function that returns the length of a string after removing all spaces.

// 2. **charAt**
//    - Write a function to get the third character from a given string.
//    - Implement a program that prints each character of a string and its position using `charAt`.

// 3. **charCodeAt**
//    - Create a function that returns the Unicode value of the first character in a string.
//    - Write a program that converts each character in a string to its corresponding Unicode value and displays the results.

// 4. **concat**
//    - Write a function that concatenates three strings and returns the result.
//    - Create a program that joins an array of strings into a single string using `concat`.

// 5. **startsWith**
//    - Implement a function to check if a given string starts with a specified prefix.
//    - Write a program that verifies whether a URL starts with "https://".

// 6. **endsWith**
//    - Create a function to check if a filename ends with a specific extension (e.g., ".jpg").
//    - Write a program that checks if a string ends with a specified suffix and returns the result.

// 7. **includes**
//    - Write a function to check if a given string contains a specific word.
//    - Implement a program that finds if a substring exists within a string and returns its presence.

// 8. **indexOf**
//    - Create a program that finds the index of the first occurrence of a word in a given sentence.
//    - Write a function to return the index of a substring in a string or -1 if it’s not found.

// 9. **lastIndexOf**
//    - Write a function that finds the index of the last occurrence of a character in a string.
//    - Create a program that finds the last occurrence of a substring within a string.

// 10. **replace**
//     - Write a function to replace the first occurrence of a specific word in a sentence with another word.
//     - Implement a program that replaces all instances of a character in a string with another character, but only the first occurrence.

// 11. **replaceAll**
//     - Create a function that replaces all spaces in a string with underscores.
//     - Write a program to replace every occurrence of a specific word in a text with another word.
