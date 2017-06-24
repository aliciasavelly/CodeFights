function isArrayDense(a) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
    if (a[i] > max) {
      max = a[i];
    }
  }

  let hash = {};
  if ((max - min) == (a.length - 1)) {

    for (let i = 0; i < a.length; i++) {
      hash[a[i]] = true;
    }

    for (let i = min; i < min + a.length; i++) {
      if (!hash[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
}
