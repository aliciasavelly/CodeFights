function smallestNumber(n) {
  if (n == 1) {
    return 0;
  }

  var result = "1";
  for (var i = 0; i < n - 1; i++) {
    result += "0";
  }

  return Number(result);
}
