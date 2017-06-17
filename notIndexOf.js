function notIndexOf(givenString, value) {
    var valHash = {};

    for (var i = 0; i < value.length; i++) {
        valHash[i] = value[i];
    }

    var valid = true;
    for (var j = 0; j <= givenString.length - value.length; j++) {
        for (var k = j; k < value.length + j; k++) {
            if (valHash[k -j] == givenString[k]) {
                valid = false;
                break;
            }
        }

        if (valid) {
            return j;
        }
        valid = true;
    }

    return -1;
}
