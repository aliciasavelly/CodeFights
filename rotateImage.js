function rotateImage(a) {
  let current;
  let next;


  for (let j = 0; j < a.length / 2; j++) {

    for (let i = j; i < a.length - 1 - j; i++) {
      next = a[i + j][a.length - 1 - j];
      a[i + j][a.length - 1 - j] = a[0 + j][i + j];
      current = next;

      next = a[a.length - 1 - j][a.length - 1 - i - j];
      a[a.length - 1 - j][a.length - 1 - i - j] = current;
      current = next;

      next = a[a.length - 1 - i - j][0 + j];
      a[a.length - 1 - i - j][0 + j] = current;
      current = next;

      next = a[0 + j][i + j];
      a[0 + j][i + j] = current;
      current = next;
    }
  }

  return a;
}
