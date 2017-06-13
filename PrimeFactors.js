/*

Consider the following operation - we take a positive integer n and replace it with the sum of its prime factors (if a prime number is presented multiple times in the factorization of n, then it's counted the same number of times in the sum). This operation is applied sequentially first to the given number, then to the first result, then to the second result and so on, until the result remains the same.

Given any number, find the final result of the operation.

Example

For n = 24, the output should be
factorSum(n) = 5.

24 -> (2 + 2 + 2 + 3) = 9 -> (3 + 3) = 6 -> (2 + 3) = 5 -> 5.
So the answer for n = 24 is 5.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
2 ≤ n ≤ 200.

[output] integer

*/

function factorSum(n) {
    var factors = [];
    var current = n;
    var primes = {2: true};

    for (var i = 3; i <= n; i++) {
        if (isPrime(i)) {
            primes[i] = true;
        }
    }

    while (!primes[current]) {
        for (var i = 2; i <= n / 2; i++) {
            if (primes[current]) {
                factors.push(current);
                break;
            } else if (primes[i] && (current / i) % 1 == 0) {
                factors.push(i);
                current /= i;
                i--;
            }
        }

        current = facAdd(factors);
        factors = [];
    }

    return current;
}

function facAdd(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if ((num / i) % 1 == 0) {
            return false;
        }
    }

    return true;
}
