// function removeDuplicateAdjacents(string) {
//   let finished = true;
//   let result = "";
//   for (let i = 1; i < string.length; i++) {
//     console.log(i);
//     if (string[i] == string[i - 1]) {
//       string = string.slice(0, i) + string.slice(i + 1, string.length);
//       i--;
//     }
//   }
//   return string;
// }

function removeDuplicateAdjacents(string) {
  let finished = true;
  for (let i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] != string[j]) {
        break;
      }
      finished = false;
    }
    if (!finished) {
      return removeDuplicateAdjacents(string.slice(0, i) + string.slice(j, string.length));
    }
  }

  return string;
}

console.log(removeDuplicateAdjacents("cooodefightssforrrcodee") === "cdefightfocod");
console.log(removeDuplicateAdjacents("cooodefightssforrrcodee"));
console.log(removeDuplicateAdjacents("acaaabbbacdddd") === "acac");
console.log(removeDuplicateAdjacents("acaaabbbacdddd"));
