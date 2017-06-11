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
