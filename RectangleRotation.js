function rectangleRotation(a, b) {
//     // return ((a - 1) * (b - 1) + (a - 2) * (b - 2));

//     var amidlen = Math.floor(a / 1.4 / 2) * 2 + 1;
//     var bmidlen = Math.floor(b / 1.4 / 2) * 2 + 1;
//     var middots = amidlen * bmidlen;
//     console.log(middots);


  var sqr = function(x) {
    return x * x;
  }

  var answer = 0;
  for (var x = -a - b; x <= a + b; x++) {
    for (var y = -b; y <= b; y++) {
      if (2 * sqr(x - y) <= sqr(a) && 2 * sqr(x + y) <= sqr(b)) {
        answer++;
      }
    }
  }

  return answer;
}
