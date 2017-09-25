function areFollowingPatterns(strings, patterns) {
  let patternHash = {};

  for (let i = 0; i < strings.length; i++) {
    if (patternHash[strings[i]] == undefined) {
      patternHash[strings[i]] = patterns[i];
    } else if (patternHash[strings[i]] != patterns[i]) {
      return false;
    }
  }

  let values = Object.values(patternHash);

  return uniqValues(values);
}

function uniqValues(values) {
  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] == values[j]) {
        return false;
      }
    }
  }

  return true;
}
