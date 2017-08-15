function regexMatching(pattern, test) {
  let len = pattern.length - 1;
  if (pattern[0] === "^") {
    if (test.slice(0, len) === pattern.slice(1, len  + 1)) {
      return true;
    }
    return false;
  } else if (pattern[len] === "$") {
    if (test.slice(test.length - len, test.length) === pattern.slice(0, len)) {
      return true;
    }
    return false;
  }

  len++;

  if (len === test.length) {
    if (pattern === test) {
      return true;
    }
    return false;
  }

  return substring(pattern, test);
}

function substring(pattern, test) {
  for (let i = 0; i < test.length - pattern.length + 1; i++) {
    if (test.slice(i, i + pattern.length) === pattern) {
      return true;
    }
  }

  return false;
}
