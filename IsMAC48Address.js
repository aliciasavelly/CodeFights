function isMAC48Address(inputString) {
    if (inputString.length != 17) {
        return false;
    }

    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] == "-") {
            if ((i + 1) % 3 != 0) {
                return false;
            }
        } else if ( !(inputString[i].charCodeAt(0) >= 65 && inputString[i].charCodeAt(0) <= 70) && !(inputString[i].charCodeAt(0) >= 48 && inputString[i].charCodeAt(0) <= 57)) {
            return false;
        }
    }

    return true;
}
