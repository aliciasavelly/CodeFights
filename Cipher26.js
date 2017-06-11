function cipher26forward(message) {
    var total = 0;
    var result = "";

    for (var i = 0; i < message.length; i++) {
        total += (message.charCodeAt(i) - 97);
        result += String.fromCharCode((total % 26) + 97);
    }

    return result;
}

function cipher26backward(message) {
  var toSubtract = 0;
  var result = "";

  for (var i = 0; i < message.length; i++) {
    var r = message.charCodeAt(i) - toSubtract - 97;
    while (r < 0) {
      r += 26;
    }
    result += String.fromCharCode(r + 97);
    toSubtract += (message.charCodeAt(i) - toSubtract - 97);
  }

  return result;
}

console.log(cipher26backward("taiaiaertkixquxjnfxxdh"));
console.log(cipher26forward("thisisencryptedmessage"));

/*

You've intercepted an encrypted message, and you are really curious about its
contents. You were able to find out that the message initially contained only
lowercase English letters, and was encrypted with the following cipher:

Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25,
respectively.
The number corresponding to the ith letter of the encrypted message is then
equal to the sum of numbers corresponding to the first i letters of the initial
unencrypted message modulo 26.
Now that you know how the message was encrypted, implement the algorithm to
decipher it.

Example

For message = "taiaiaertkixquxjnfxxdh", the output should be
cipher26(message) = "thisisencryptedmessage".

The initial message "thisisencryptedmessage" was encrypted as follows:

letter 0: t -> 19 -> t;
letter 1: th -> (19 + 7) % 26 -> 0 -> a;
letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i;
etc.
Input/Output

[time limit] 4000ms (js)
[input] string message

An encrypted string containing only lowercase English letters.

Guaranteed constraints:
1 ≤ message.length ≤ 200.

[output] string

A decrypted message.

*/
