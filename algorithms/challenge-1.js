function isAnagram(str1, str2) {
  let arr1 = Array.from(str1);
  let arr2 = Array.from(str2);
  if (isArrayEqual(arr1, arr2)) {
    return true;
  } 
  else {
    if (str1.length === str2.length) {
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
            arr1[i] = arr2[j] = Infinity;
            j = 0;
            break;
          }
        }
      }
      if(isArrayEqual(arr1, arr2)){
        return true
      }
      else{
        return false;
      }
    } 
    else {
      return false;
    }
  }
}

function isArrayEqual(a, b) {
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

module.exports = isAnagram;

console.log(isAnagram("remote", "meteor"));
