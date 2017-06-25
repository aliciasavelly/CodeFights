function newRoadSystem(roadRegister) {
  let hash = {};

  for (let i = 0; i < roadRegister.length; i++) {
    for (let j = 0; j < roadRegister[0].length; j++) {
      if (roadRegister[i][j] == true) {
        hash[i] ? hash[i] += 1 : hash[i] = 1;
        hash[j] ? hash[j] -= 1 : hash[j] = -1;
      }
    }
  }

  for (let key in hash) {
    if (hash[key] != 0) {
      return false;
    }
  }

  return true;
}
