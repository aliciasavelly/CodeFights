def reverseSentence(sentence)
  sentenceArr = sentence.split(" ")
  result = []

  (sentenceArr.length - 1).downto(0).each do |i|
    result << sentenceArr[i]
  end

  return result.join(" ")
end

p reverseSentence("Man eats dog")
