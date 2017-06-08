function rectangleRotation(a, b) {
  var middots = Math.floor(a / 1.4 / 2);
  var amidlen = middots * 2 + 1;
  var bmidlen = 1;
  var current1 = [middots, middots];
  var current2 = [middots, middots];
  var notFoundBMidLen = true;

  while (notFoundBMidLen) {
    current1[0] -= 1;
    current1[1] += 1;
    current2[0] += 1;
    current2[1] -= 1;
    var dist = Math.sqrt( Math.pow((current2[0] - current1[0]), 2) + Math.pow((current2[1] - current1[1]), 2) );

    if (dist > b) {
      notFoundBMidLen = false;
      current1[0] += 1;
      current1[1] -= 1;
      current2[0] -= 1;
      current2[1] += 1;
    } else {
      bmidlen += 2;
    }
  }

  var testPoint = [current1[0] - 1, current1[1]];
  var testPoint2 = [testPoint[1], testPoint[0]];
  dist = Math.sqrt( Math.pow((testPoint2[0] - testPoint[0]), 2) + Math.pow((testPoint2[1] - testPoint[1]), 2) );
  var bofflen;
  var aofflen;

  if (dist > b) {
    bofflen = bmidlen - 1;
    aofflen = amidlen - 1;
  } else {
    bofflen = bmidlen + 1;
    aofflen = amidlen + 1;
  }

  testPoint = [current1[0] + 1, current1[1]];
  testPoint2 = [testPoint[1] * -1, testPoint[0] * -1];
  dist = Math.sqrt( Math.pow((testPoint2[0] - testPoint[0]), 2) + Math.pow((testPoint2[1] - testPoint[1]), 2) );

  if (dist < a) {
    aofflen = amidlen + 1;
  }

  return (bmidlen * amidlen) + (bofflen * aofflen);
}

console.log(rectangleRotation(6, 4) == 23);
console.log(rectangleRotation(30, 2) == 65);
console.log(rectangleRotation(8, 6) == 49);
console.log(rectangleRotation(16, 20) == 333);
