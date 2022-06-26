function isAnagram(str1, str2) {
    if(str1.length!=str2.length) {
        return false;
    }
    else{
        //get the two strings sorted
  let sortedStr1=str1.split('').sort().join('');
  let sortedStr2=str2.split('').sort().join('');

  // check if the two strings are same
  if(sortedStr1=== sortedStr2){
    return true;
  }
    }
  return false;
}

module.exports = isAnagram;

console.log(isAnagram("rekmote", "metero"));
