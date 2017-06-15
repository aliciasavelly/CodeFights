function isOneSwapEnough(inputString) {
    if (isPalindrome(inputString)) {
        return true;
    }

    for (var i = 0; i < inputString.length - 1; i++) {
        if (inputString[i] != inputString[i + 1]) {
            var mixed = inputString.slice(0, i) + inputString[i + 1] + inputString[i] + inputString.slice(i + 2, inputString.length);
            if (isPalindrome(mixed)) {
                return true;
            }
        }
    }

    return false;
}

function isPalindrome(string) {
    for (var i = 0; i <= string.length / 2; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
