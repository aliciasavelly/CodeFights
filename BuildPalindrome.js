function buildPalindrome(st) {
    if (isPalindrome(st)) {
        return st;
    }

    for (var i = 0; i < st.length; i++) {
        if (isPalindrome(st.slice(i, st.length))) {
            return st + reverse(st.slice(0, i));
        }
    }
}

function isPalindrome(string) {
    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function reverse(string) {
    var result = "";

    for (var i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }

    return result;
}
