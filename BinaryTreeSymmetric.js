function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function isTreeSymmetric(t) {
    if (t == undefined) {
        return true;
    }

    return areTreesMirror(t.left, t.right);
}

/*
Iterative Solution
*/

function areTreesMirror(t1, t2) {
    var leftSide = [t1];
    var rightSide = [t2];

    while (leftSide.length > 0 && rightSide.length > 0) {
        currentL = leftSide.pop();
        currentR = rightSide.pop();

        if (currentL == undefined && currentR == undefined) {
            continue;
        } else if (currentL == undefined || currentR == undefined) {
            return false;
        } else if (currentL.value != currentR.value) {
            return false;
        }

        leftSide.push(currentL.left);
        rightSide.push(currentR.right);
        leftSide.push(currentL.right);
        rightSide.push(currentR.left);
    }

    return leftSide.length == 0 && rightSide.length == 0;
}

/*
Recursive Solution
*/

function areTreesMirror(t1, t2) {
  if (t1 == undefined && t2 == undefined) {
    return true;
  } else if (t1 == undefined || t2 == undefined || t1.value != t2.value) {
    return false;
  } else if (areTreesMirror(t1.left, t2.right) == false) {
    return false;
  }

  return areTreesMirror(t1.right, t2.left);
}


// let root = Tree(1);
// root.left = Tree(2);
// root.right = Tree(2);
// root.left.left = Tree(3);
// root.left.right = Tree(4);
// root.right.left = Tree(4);
// root.right.right = Tree(3);
let root = {
  "value": 1,
  "left": {
    "value": 2,
    "left": {
      "value": 3,
      "left": null,
      "right": null
    },
    "right": {
      "value": 4,
      "left": null,
      "right", null
    }
  },
  "right": {
    "value": 2,
    "left": {
      "value": 4,
      "left": null,
      "right", null
    },
    "right": {
      "value": 3,
      "left": null,
      "right": null
    }
  }
};

console.log(isTreeSymmetric(root));
