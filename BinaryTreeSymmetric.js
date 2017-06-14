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
  while (leftSide && rightSide) {
    console.log(leftSide);
    console.log(rightSide);
    currentL = leftSide.pop();
    currentR = rightSide.pop();

    if (currentL == undefined && currentR == undefined) {
      continue;
    }

    if (currentL == undefined || currentR == undefined) {
      console.log("or");
      return false;
    }

    if (currentL.value != currentR.value) {
      console.log("not eq");
      console.log(currentL);
      console.log(currentR);
      return false;
    }

    leftSide.push(currentL.left);
    rightSide.push(currentR.right);
    leftSide.push(currentL.right);
    leftSide.push(currentR.left);
  }

  return leftSide.length == 0 && rightSide.length == 0;
}

/*
Recursive Solution
*/
function areTreesMirror(t1, t2) {
  if (t1 == undefined && t2 == undefined) {
    return true;
  }
  if (t1 == undefined || t2 == undefined) {
    return false;
  }
  if (t1.value != t2.value) {
    return false;
  }

  if (areTreesMirror(t1.left, t2.right) == false) {
    return false;
  }

  return areTreesMirror(t1.right, t2.left);
}


let root = Tree(1)
root.left = Node(2)
root.right = Node(2)
root.left.left = Node(3)
root.left.right = Node(4)
root.right.left = Node(4)
root.right.right = Node(3)
console.log(this.value);
