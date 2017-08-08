function sudoku2(grid) {
    if (!validRows(grid)) {
        console.log("3");
        return false;
    }

    var newGrid = transposeCols(grid);
    if (!validRows(newGrid) || !validSquares(grid)) {
        return false;
    }

    return true;
}

function validRows(grid) {
    var total;
    var values;

    for (var i = 0; i < 9; i++) {
        total = 0;
        values = new Set();

        for (var j = 0; j < 9; j++) {
            // console.log(values.has(grid[i][j]));
            console.log(!values.has(grid[i][j]));
            console.log(i);
            console.log(j);
            console.log(grid[i][j]);
            let p = grid[i][j];
            if (values.has(p) == false) {
                total += 1;
                values.add(grid[i][j]);
            }
        }

        if (total != values.size) {
            // console.log(total);
            // console.log(values);
            // console.log(29);
            return false;
        }
    }

    return true;
}

function transposeCols(grid) {
    return true;
}

function validSquares(grid) {
    return true;
}

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

console.log(sudoku2(grid));
