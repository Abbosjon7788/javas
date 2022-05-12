//Problem1: Reverse string
//Return string in reverse
//Ex: reverseString('hello') === 'olleh'

function reverseString1(str) {
     const strArr = str.split('');
     strArr.reverse();

     return strArr.join('');
}

function reverseString2(str) {
     let revString = '';
     for (let i = str.length - 1; i >= 0; i--) {
          revString = revString + str[i];
     }
     return revString;
}

function reverseString3(str) {
     let revString = '';
     for (let i = 0; i <= str.length - 1; i++) {
          revString = str[i] + revString;
     }

     return revString;
}

function reverseString4(str) {
     let revString = '';
     for (let char of str) {
          revString = char + revString;
     }

     return revString;
}

function reverseString5(str) {
     let revString = '';
     str.split('').forEach(char => {
          revString = char + revString;
     })

     return revString;
}

function reverseString6(str) {
     return str.split('').reduce((revString, char) => char + revString, '')
}

//Problem2: Validate a Palindrome
//Return true if palindrome or false if not
//Ex: isPalindrome('racecar') === 'true' & isPalindrome('hello') === 'false'

function isPalindrome(str) {
     const revStr = str.split('').reduce((revString, char) => char + revString, '');
     return str === revStr;
}

//Problem3: Reverse an integer
//Return an integer in reverse
//Ex: reverseInt(123) === 321

function reverseInt(int) {
     const revStr = int.toString().split('').reduce((revString, char) => char + revString, '');

     return parseInt(revStr) * Math.sign(int);
}

//Problem4: Capitalize letters
//Return string with the first letter of every word capitalized
//Ex: capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters1(str) {
     const strArr = str.toLowerCase().split(' ');
     for (let i = 0; i < strArr.length; i++) {
          strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
     }
     return strArr.join(' ');
}

function capitalizeLetters2(str) {
     return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}

//Problem5: Max character 
//Return the most common character in a string
//Ex: maxCharacter('javascript') === 'a'

function maxCharacter(str) {
     const charMap = {};
     let maxChar = '';
     let maxNum = 0;

     str.split('').forEach(char => {
          if (charMap[char]) {
               charMap[char]++;
          } else {
               charMap[char] = 1;
          }
     })

     for (char in charMap) {
          if (charMap[char] > maxNum) {
               maxNum = charMap[char];
               maxChar = char;
          }
     }

     return maxChar;
}


//Problem6: FIZZBUZZ
//Write a programm that prints all number from 1 to 100. For multipliers of 3, instead of number
//print "Fizz", for multipliers of 5 print "Buzz". For multipliers of both 3 and 5 print "FizzBuzz".

function fizzBuzz() {
     for (let i = 1; i <= 100; i++) {
          let a = '';
          if (i % 15 === 0) {
               a = "FizzBuzz";
          }
          else if (i % 3 === 0) {
               a = "Fizz";
          } else if (i % 5 === 0) {
               a = "Buzz";
          } else {
               a = i;
          }
          console.log(a)
     }
}

//Problem7: Logest word
//Return longest word of a string
//Ex: longestWord('Hello, my name is Brad') === 'hello'
//Ex: longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(str) {
     const strArr = str.toLowerCase().match(/[a-z0-9]+/g)
     const sortedArr = strArr.sort((a, b) => b.length - a.length)
     const longestWordArr = sortedArr.filter(word => word.length === sortedArr[0].length)
     if (longestWordArr.length === 1) {
          return longestWordArr[0]
     }

     return longestWordArr
}

//Problem8: Array chunking
function chunkArray(arr, len) {
     const chunked = [];
     while (arr.length) {
          chunked.push(arr.splice(0, len));
     }
     return chunked;
}

const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(output);

