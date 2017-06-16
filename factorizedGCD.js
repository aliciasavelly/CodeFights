function factorizedGCD(a, b) {
  let first = 1;
  let second = 1;

  for (let i = 0; i < a.length; i++) {
    first *= a[i];
  }
  for (let i = 0; i < b.length; i++) {
    second *= b[i];
  }

  return findGCD(first, second);
}

function findGCD(first, second) {
  for (let i = Math.min(first, second); i >= 2; i--) {
    if ((first / i) % 1 === 0 && (second / i) % 1 === 0) {
      return i;
    }
  }

  return 1;
}
