function isAnagram(str1, str2) {
  const cleanedStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const cleanedStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const sortedStr1 = cleanedStr1.split('').sort().join('');
  const sortedStr2 = cleanedStr2.split('').sort().join('');
  console.log(sortedStr1, sortedStr2);
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent'));
