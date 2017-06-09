function isSubstitutionCipher(string1, string2) {
    if (checkHash(string1, string2) == false || checkHash(string2, string1) == false) {
        return false;
    }

    return true;
}

function checkHash(string1, string2) {
    var hash = {};

    for (var i = 0; i < string2.length; i++) {
        if (hash[string2[i]] == undefined) {
            hash[string2[i]] = string1[i];
        } else {
            if (hash[string2[i]] != string1[i]) {
                return false;
            }
        }
    }
}
