function reverseSentence(sentence) {
  let sentenceArr = sentence.split(" ");
  let result = [];

  for (let i = sentenceArr.length - 1; i >= 0; i--) {
    result.push(sentenceArr[i]);
  }

  return result.join(" ");
}

console.log(reverseSentence("Man bites dog") == "dog bites Man");
