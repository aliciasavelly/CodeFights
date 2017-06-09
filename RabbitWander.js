function rabbitWander(matrix) {
  let middlePos = findMiddlePos(matrix);
  console.log(middlePos);
}

function findMiddlePos(matrix) {
  var rows = [];
  var cols = [];
  if (matrix.length % 2 == 0) {
    rows.push(matrix.length / 2);
    rows.push(matrix.length / 2 - 1);
  } else {
    rows.push(Math.floor(matrix.length / 2));
  }
  if (matrix[0].length % 2 == 0) {
    cols.push(matrix[0].length / 2);
    cols.push(matrix[0].length / 2 - 1);
  } else {
    cols.push(Math.floor(matrix[0].length / 2));
  }

  if (rows.length == 1) {
    if (cols.length == 1) {
      return [[rows[0], cols[0]]];
    } else {
      return [[rows[0], cols[0]], [rows[0], cols[1]]];
    }
  } else {
    if (cols.length == 1) {
      return [[rows[0], cols[0]], [rows[1], cols[0]]];
    } else {
      return [[rows[0], cols[0]], [rows[0], cols[1]], [rows[1], cols[0]], [rows[1], cols[1]]];
    }
  }
}

let m1 = [[5, 7, 8, 6, 3],
          [0, 0, 7, 0, 4],
          [4, 6, 3, 4, 9],
          [3, 1, 0, 5, 8]]
console.log(rabbitWander(m1) == 27);

let m2 = [[5, 7, 8, 6],
          [0, 0, 7, 0],
          [4, 6, 3, 4],
          [3, 1, 0, 5]]
console.log(rabbitWander(m2) == 27);

let m3 = [[5, 7, 8, 6, 3],
          [0, 0, 7, 0, 4],
          [4, 6, 3, 4, 9],
          [3, 1, 0, 5, 8],
          [7, 0, 1, 2, 7]]
console.log(rabbitWander(m3) == 27);

let m4 = [[5, 7, 8, 6],
          [0, 0, 7, 0],
          [4, 6, 3, 4],
          [3, 1, 0, 5],
          [2, 0, 1, 3]]
console.log(rabbitWander(m4) == 27);
