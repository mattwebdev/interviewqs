function palindrome(word) {
  let regex = /[^A-Za-z0-9]/g;
  let isPalindrome;
  let lowerCaseWord = word.toLowerCase().replace(regex, '');
  let reverseOrder = lowerCaseWord.split('').reverse().join(''); 
  if(reverseOrder === lowerCaseWord) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
  }
  
  return isPalindrome
}
