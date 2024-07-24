// Write a JavaScript function that reverse a number.
// Example x = 32243; Expected Output : 34223

// // Step 1
// const reverser = (num) => {
//   const text = String(num);
//   const len = text.length; // 5
//   let newNum = "";
//   for (let i = len - 1; i >= 0; i--) {
//     newNum += text[i];
//   }
//   return newNum;
// };
// const result = reverser(32243);

// // Step 2
// const reverserNew = (num) => {
//   const text = String(num);
//   const splitData = text.split(""); //["3","2","2","4","3"]
//   const reversedData = splitData.reverse(); //["3","4","2","2","3"]
//   const joinedData = reversedData.join("");
//   return joinedData;
// };

// // Step 3
// // Function Chaining
// const reverserNewV2 = (num) => String(num).split("").reverse().join("");
// reverserNewV2(32243);

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

// Example string : 'The quick brown fox'

// Expected Output : 5

// step 1
// 0. string convert to lowercase
// 1. string loop
// 2. check for vowel during loop
// 3. count the vowels

const countVowels = (sentence) => {
  let count = 0;
  const text = sentence.toLowerCase();
  for (let i = 0; i <= text.length - 1; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};

const count = countVowels("The quick brown fox");
console.log({ count });
