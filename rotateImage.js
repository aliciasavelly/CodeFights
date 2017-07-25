function rotateImage(a) {
  let current, next;

  for (let j = 0; j < a.length / 2; j++) {
    for (let i = j; i < a.length - 1 - j; i++) {
      next = a[i][a.length - 1 - j];
      a[i][a.length - 1 - j] = a[j][i];
      current = next;

      next = a[a.length - 1 - j][a.length - 1 - i];
      a[a.length - 1 - j][a.length - 1 - i] = current;
      current = next;

      next = a[a.length - 1 - i][j];
      a[a.length - 1 - i][j] = current;
      current = next;

      next = a[j][i];
      a[j][i] = current;
      current = next;
    }
  }

  return a;
}
