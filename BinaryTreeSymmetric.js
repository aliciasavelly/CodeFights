class Tree {
  constructor(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }

  left(l) {
    this.left = l;
  }

  right(r) {
    this.right = r;
  }
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

let tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(2);
tree.left.left = new Tree(3);
tree.left.right = new Tree(4);
tree.right.left = new Tree(4);
tree.right.right = new Tree(3);

console.log(isTreeSymmetric(tree));
