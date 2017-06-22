function calendar(month, year) {
  let date = new Date(year, month - 1);
  let startIdx = date.getDay();
  let end = 31;
  let result = [[], [], [], [], [], []];

  for (let i = 0; i < startIdx; i++) {
    result[0].push(0);
  }

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    end = 30;
  }
  if (month == 2) {
    end = leapYear(year) ? 29 : 28;
  }

  let idx = startIdx;
  let level = 0;
  for (let i = 1; i <= end; i++) {
    result[level][idx] = i;
    if (idx == 6) {
      idx = 0;
      level++;
    } else {
      idx++;
    }
  }

  while (result[4].length < 7) {
      result[4].push(0);
  }
  while (result[5].length < 7) {
      result[5].push(0);
  }

  return result;
}

function leapYear(year) {
    if (year % 4 != 0) {
        return false;
    } else if (year % 100 != 0) {
        return true;
    } else if (year % 400 != 0) {
        return false;
    }
    return true;
}
