function sumOfTwo(a, b, v) {
  let aSet = new Set;
  let bSet = new Set;

  for (let i = 0; i < a.length; i++) {
    aSet.add(a[i]);
  }

  for (let i = 0; i < b.length; i++) {
    bSet.add(b[i]);
  }

  let smallArr = aSet.size < bSet.size ? a : b;
  let otherSet = aSet.size < bSet.size ? bSet : aSet;

  for (let i = 0; i < smallArr.length; i++) {
    if (otherSet.has(v - smallArr[i])) {
      return true;
    }
  }

  return false;
}
