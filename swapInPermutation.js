function swapInPermutation(p) {
  let count = 0;

  for (let i = 0; i < p.length; i++) {
    if ((p[i] % 2 == 0 && i % 2 != 0) || (p[i] % 2 != 0 && i % 2 == 0)) {
      count++;
    }
  }

  return count == 0 || count == 2;
}
