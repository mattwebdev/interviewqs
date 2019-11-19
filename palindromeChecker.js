function palindrome(word) {
  let regex = /[^A-Za-z0-9]/g;
  let isPalindrome;
  let lowerCaseWord = word.toLowerCase().replace(regex, '');
  let reverseOrder = lowerCaseWord.split('').reverse().join(''); 
  isPalindrome = (reverseOrder === lowerCaseWord);
  
  return isPalindrome
}
