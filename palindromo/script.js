//Palindrome
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

  //Minmax
  function arrayMaxMin(arr) {
  if (arr.length === 0) {
      return [];
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
   max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}