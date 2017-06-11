function prefixSumsToSuffixSums(prefixSums) {
    var regArr = [prefixSums[0]];
    for (var i = 1; i < prefixSums.length; i++) {
        var j = i - 1;
        regArr.push(prefixSums[i] - prefixSums[j]);
    }

    var result = [];
    for (var m = 0; m < prefixSums.length; m++) {
        var current = 0;
        for (var n = m; n < prefixSums.length; n++) {
            current += regArr[n];
        }
        result.push(current);
    }

    return result;
}
