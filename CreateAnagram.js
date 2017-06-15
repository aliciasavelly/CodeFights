/*
You are given two strings s and t of the same length, consisting of uppercase
English letters. Your task is to find the minimum number of "replacement
operations" needed to get some anagram of the string t from the string s. A
replacement operation is performed by picking exactly one character from the
string s and replacing it by some other character.

Example

For s = "AABAA" and t = "BBAAA", the output should be
createAnagram(s, t) = 1;
For s = "OVGHK" and t = "RPGUC", the output should be
createAnagram(s, t) = 4.
Input/Output

[time limit] 4000ms (js)
[input] string s

Guaranteed constraints:
5 ≤ s.length ≤ 35.

[input] string t

Guaranteed constraints:
t.length = s.length.

[output] integer

The minimum number of replacement operations needed to get an anagram of the
string t from the string s.
*/

function createAnagram(s, t) {
  let sHash = {};
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    sHash[s[i]] ? sHash[s[i]] += 1 : sHash[s[i]] = 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (sHash[t[j]] > 0) {
      sHash[t[j]] -= 1;
    }
  }

  for (let key in sHash) {
    result += sHash[key];
  }

  return result;
}

console.log(createAnagram("AABAA", "BBAAA"));
console.log(createAnagram("OVGHK", "RPGUC"));
