function textJustification(words, l) {
  var text = [];
  var currentWord = 0;

  while (currentWord < words.length) {
    var left = currentWord;
    var right = left;
    var currentSum = words[left].length;

    while (right + 1 < words.length && currentSum + words[right + 1].length + 1 <= l) {
      currentSum += words[right + 1].length + 1;
      right++;
    }
    if (left === right) {
      var line = words[left];
      for (var i = 0; i < l - words[left].length; i++) {
        line += ' ';
      }
      text.push(line);
    } else {
      var freeSpace = l - currentSum;
      var minimalSpaceLen = 1 + Math.floor(freeSpace / (right - left));
      var extraSpaces = freeSpace % (right - left);
      minimalSpace = '';

      for (var i = 0; i < minimalSpaceLen; i++) {
        minimalSpace += ' ';
      }

      var line = '';
      for (var i = left; i < right; i++) {
        line += words[i] + minimalSpace;
        if (extraSpaces > 0) {
          line += ' ';
          extraSpaces--;
        }
      }
      text.push(line + words[right]);
    }

    currentWord = right + 1;
  }

  return text;
}

console.log(textJustification(["Alicia", "is", "a", "very", "capable", "coder."], 7));
console.log(textJustification(["Alicia", "is", "a", "very", "capable", "coder."], 14));
console.log(textJustification(["Alicia", "is", "a", "very", "capable", "coder."], 16));
