function nthNumber(s, n) {
  var re = new RegExp(`(?:[0\\D]*(\\d+)\\D*){${n}}`);
  return re.exec(s)[1];
}

//find the nth number
// input:
// s: 8one 003number 201numbers li-000233le number444
// n: 4
// output:
// 233
