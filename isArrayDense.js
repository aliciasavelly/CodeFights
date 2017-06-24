function isArrayDense(a) {
  var min = Infinity;
  var max = -Infinity;

  for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
    if (a[i] > max) {
      max = a[i];
    }
  }

  if ((max - min) == (a.length - 1)) {
    var result = true;
    for (var i = min; i < min + a.length; i++) {
      if (!a.includes(i)) {
        result = false;
      }
    }
    return result;
  }

  return false;
}
