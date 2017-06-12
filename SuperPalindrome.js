function isSuperPalindrome(s, k) {
    var toTest = s.slice(0, k * 2);

    return isPalindrome(toTest);
}

function isPalindrome(string) {
    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

/*

A string s is considered to be a super palindrome of rank k, if each prefix of
s of length i = k * 2j for all positive j is a palindrome.

Given a string s, determine whether it's a super palindrome of rank k or not.

Fun fact: You can do this in one pass over s!

Example

For s = "10011001" and k = 2, the output should be
isSuperPalindrome(s, k) = true.

The prefix of length 4 is "1001", which is a palindrome;
The prefix of length 8 is "10011001", which is also a palindrome.
Thus, the answer is true.

For s = "www" and k = 1, the output should be
isSuperPalindrome(s, k) = true.

A super palindrome of rank 1 should consist of only one character. Since this
is the case, the answer is true.

For s = "654neveroddoreven456" and k = 5, the output should be
isSuperPalindrome(s, k) = false.

Although s is a palindrome, it's not a super palindrome of rank 5, since
"654neverod" is not a palindrome.

Input/Output

[time limit] 4000ms (js)
[input] string s

A string consisting of digits and lowercase English letters. It is
guaranteed that the length of s can be represented in the format k * 2j
for some positive j.

Guaranteed constraints:
1 ≤ s.length ≤ 106.

[input] integer k

The rank of the super palindrome.

Guaranteed constraints:
1 ≤ k ≤ n / 2.

[output] boolean

Return true if s is a super palindrome of rank k, otherwise return false.

*/
