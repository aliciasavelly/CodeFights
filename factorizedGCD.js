function factorizedGCD(a, b) {
    var first = 1;
    var second = 1;

    for (var i = 0; i < a.length; i++) {
        first *= a[i];
    }
    for (var i = 0; i < b.length; i++) {
        second *= b[i];
    }

    return findGCD(first, second);
}

function findGCD(first, second) {
    for (var i = Math.min(first, second); i >= 2; i--) {
        if ((first / i) % 1 === 0 && (second / i) % 1 === 0) {
            console.log(i);
            console.log(first);
            console.log(second);
            return i;
        }
    }

    return 1;
}
