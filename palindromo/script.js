function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
  
      if (str[start] !== str[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}
const userInput = prompt("Digite uma palavra ou frase:");
const result = isPalindrome(userInput);

if (result) {
    alert(`"${userInput}" é um palíndromo!`);
} else {
    alert(`"${userInput}" não é um palíndromo.`);
}
