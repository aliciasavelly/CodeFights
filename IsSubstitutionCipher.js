function isSubstitutionCipher(string1, string2) {
    var hash1 = {};

    for (var i = 0; i < string1.length; i++) {
        if (hash1[string1[i]] == undefined) {
            hash1[string1[i]] = string2[i];
        } else {
            if (hash1[string1[i]] != string2[i]) {
                return false;
            }
        }
    }

    hash1 = {};

    for (var i = 0; i < string2.length; i++) {
        if (hash1[string2[i]] == undefined) {
            hash1[string2[i]] = string1[i];
        } else {
            if (hash1[string2[i]] != string1[i]) {
                return false;
            }
        }
    }

    return true;
}
