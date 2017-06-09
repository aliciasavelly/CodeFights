function rabbitWander(matrix) {
  let middlePos = findMiddlePos(matrix);
  console.log(middlePos);
}

function findMiddlePos(matrix) {
  if (matrix.length % 2 == 0) {
    if (matrix[0].length % 2 == 0) {
      return [ [matrix.length / 2, matrix[0].length / 2],
               [matrix.length / 2, matrix[0].length / 2 - 1],
               [matrix.length / 2 - 1, matrix[0].length / 2],
               [matrix.length / 2 - 1, matrix[0].length / 2 - 1] ];
    } else {
      return [ [matrix.length / 2, Math.floor(matrix[0].length / 2)],
               [matrix.length / 2 - 1, Math.floor(matrix[0].length / 2)] ];
    }
  } else {
    if (matrix[0].length % 2 == 0) {
      return [ [Math.floor(matrix.length / 2), matrix[0].length / 2],
               [Math.floor(matrix.length / 2), matrix[0].length / 2 - 1] ];
    } else {
      return [ [Math.floor(matrix.length / 2), Math.floor(matrix[0].length / 2)] ];
    }
  }
}

function findAdjacentPos() {

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
