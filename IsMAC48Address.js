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

/*

A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

Example

For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;
For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;
For inputString = "not a MAC-48 address", the output should be
isMAC48Address(inputString) = false.
Input/Output

[time limit] 4000ms (js)
[input] string inputString

Guaranteed constraints:
15 ≤ inputString.length ≤ 20.

[output] boolean

true if inputString corresponds to MAC-48 address naming rules, false otherwise.

*/
