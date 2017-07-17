function rotateImage(a) {
  let current;
  let next;

  for (let i = 0; i < a.length - 1; i++) {
    next = a[i][a.length - 1];
    a[i][a.length - 1] = a[0][i];
    current = next;

    next = a[a.length - 1][a.length - 1 - i];
    a[a.length - 1][a.length - 1 - i] = current;
    current = next;

    next = a[a.length - 1 - i][0];
    a[a.length - 1 - i][0] = current;
    current = next;


    next = a[0][i];
    a[0][i] = current;
    current = next;
    console.log(a);
  }

  return a;
}
