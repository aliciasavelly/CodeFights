function stringsConstruction(a, b) {
    if (a.length == 0 || b.length == 0) {
        return 0;
    }

    var aHash = constructHash(a);
    var bHash = constructHash(b);
    var multiplier = 0;

    for (var key in aHash) {
        if (bHash[key] == undefined) {
            return 0;
        } else if (multiplier == 0) {
            multiplier = Math.floor(bHash[key] / aHash[key]);
        } else if (multiplier > Math.floor(bHash[key] / aHash[key])) {
            multiplier = Math.floor(bHash[key] / aHash[key]);
        }
    }

    return multiplier;
}

function constructHash(string) {
    var h = {};
    for (var i = 0; i < string.length; i++) {
        if (h[string[i]] == undefined) {
            h[string[i]] = 1;
        } else {
            h[string[i]] += 1;
        }
    }

    return h;
}

/*

How many strings equal to a can be constructed using letters from the string b? Each letter can be used only once and in one string only.

Example

For a = "abc" and b = "abccba", the output should be
stringsConstruction(a, b) = 2.

We can construct 2 strings a with letters from b.

Input/Output

[time limit] 4000ms (js)
[input] string a

String to construct, a contains only lowercase English letters.

Guaranteed constraints:
3 ≤ a.length ≤ 10.

[input] string b

String containing needed letters, b contains only lowercase English letters.

Guaranteed constraints:
3 ≤ b.length ≤ 50.

[output] integer

*/
