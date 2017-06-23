function tennisSet(score1, score2) {
  if (score1 === score2) {
    return false;
  }
  if (score1 == 6 || score2 == 6) {
    if (score1 < 5 || score2 < 5) {
      return true;
    }
  }
  if (score1 >= 5 && score2 >= 5) {
    if (score1 > 7 || score2 > 7) {
      return false;
    }
    if (score1 >= 7 || score2 >= 7 && score1 != score2) {
      return true;
    }
  }

  return false;
}
