function findFirstSubstringOccurrence(s, x) {
    var similar = "";
    var startPos = -1;

    var j = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == x[j]) {
            similar += x[j];
            if (j == 0) {
                startPos = i;
            }
            if (similar == x) {
                // console.log(similar);
                return startPos;
            }
            j += 1;
        } else {
            if (startPos > -1) {
                // console.log(i);
                // console.log(j);
                // console.log(startPos);
                // console.log(similar);
                startPos = -1;
                similar = "";
                i = i - j;
                j = 0;
                // console.log(i);
            }
        }
    }

    return -1;
}
