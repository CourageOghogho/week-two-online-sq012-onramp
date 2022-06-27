function isPalindrome(line) {
  if(typeof line ==='number'){
    line=String(line);
  }
  let j ;

  if (line.length % 2 == 0) {
    // when even
 
    for (
      let i = line.length / 2 - 1, j = line.length / 2;
      i >= 0, j < line.length;
      i--, j++
    ) {
      if (line[i] != line[j]) {
        return false;
      }
      else{
        return true;
      }
    }
  } else {
    // when odd
    for (
      let i = (j = Math.floor(line.length / 2));
      i >= 0, j < line.length;
      i--, j++
    ) {
      if (line[i] != line[j]) {
        return false;
      }
      else{
        return true;
      }
    }
  }
}

module.exports = isPalindrome;

console.log(isPalindrome("anana"));

