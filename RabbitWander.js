function rabbitWander(matrix) {
  let middlePosArr = findMiddlePos(matrix);
  let middlePos = [];
  let greatest = -1;

  for (let i = 0; i < middlePosArr.length; i++) {
    var posVal = matrix[middlePosArr[i][0]][middlePosArr[i][1]];

    if (posVal > greatest) {
      middlePos = middlePosArr[i];
      greatest = posVal;
    }
  }

  matrix[middlePos[0]][middlePos[1]] = 0;
  let carrotsEaten = greatest;
  let adjPos = findAdjacentPos(matrix[0].length, matrix.length, middlePos);

  while (greatest > 0) {
    greatest = -1;
    for (let j = 0; j < adjPos.length; j++) {
      if (matrix[adjPos[j][0]][adjPos[j][1]] > greatest) {
        greatest = matrix[adjPos[j][0]][adjPos[j][1]];
        middlePos = adjPos[j];
        adjPos = findAdjacentPos(matrix[0].length, matrix.length, middlePos);
      }
    }
    matrix[middlePos[0]][middlePos[1]] = 0;
    carrotsEaten += greatest;
  }

  return carrotsEaten;
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

function findAdjacentPos(width, height, pos) {
  let adj = [];

  for (var i = -1; i <= 1; i++) {
    if (pos[0] + i >= 0 && pos[0] + i < height) {
      for (var j = -1; j <= 1; j++) {
        if (pos[1] + j >= 0 && pos[1] + j < width && (j != 0 || i != 0)) {
          adj.push([pos[0] + i, pos[1] + j]);
        }
      }
    }
  }

  return adj;
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
console.log(rabbitWander(m3) == 30);

let m4 = [[5, 7, 8, 6],
          [0, 0, 7, 0],
          [4, 6, 3, 4],
          [3, 1, 0, 5],
          [2, 0, 1, 3]]
console.log(rabbitWander(m4) == 33);

/*

Given a matrix, start in the middle. If there is more than one possible middle
point in the matrix, start at the one that has the greatest value. Until no
more carrots are adjacent to your position, wander to the adjacent position with
the most carrots. Return the number of total carrots consumed.

*/
