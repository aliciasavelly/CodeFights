function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

root = Tree(1)
root.left = Node(2)
root.right = Node(2)
root.left.left = Node(3)
root.left.right = Node(4)
root.right.left = Node(4)
root.right.right = Node(3)
console.log(this.value);
