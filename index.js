function isPalindrome(word) {
  // Write your algorithm here
  // racecar 7/2 = 3.5
  for(let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    if(word[i] != word[j]) return false
  }
  return true
}
/* 
 r a c e c a r
i             j

r a c e c a r
  i       j

r a c e c a r
    i   j

r a c e c a r
      ij

  Itterate from the beggining to the middle of the word.
  check each letter to the corresponding letter from the end
  If letters dont match return false.
  Return true
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("toe"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("poop"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tight"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("jogging"));

}



module.exports = isPalindrome;

// make a function that returns true if a word is a palindrome.
// That means if the first letter is the same as the last letter,
// and the second letter is the same as the second to last letter, ect.
// Until I reach the middle, return true.