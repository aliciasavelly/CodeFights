function prefixSumsToSuffixSums(prefixSums) {
  var regArr = [prefixSums[0]];
  for (var i = 1; i < prefixSums.length; i++) {
      var j = i - 1;
      regArr.push(prefixSums[i] - prefixSums[j]);
  }

  var result = [regArr[regArr.length - 1]];
  for (var m = prefixSums.length - 2; m >= 0; m--) {
      result.unshift(regArr[m] + result[0]);
  }

  return result;
}

console.log(prefixSumsToSuffixSums([1, 3, 6, 10, 15]));

/*

Find the suffix sum for the array that the given input is a prefix sum of.

ex.
original array
[1, 2, 3, 4, 5]
prefix sum
[1, 3, 6, 10, 15]
suffix sum
[15, 14, 12, 9, 5]

*/
