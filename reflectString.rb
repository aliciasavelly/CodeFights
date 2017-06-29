def reflectString(inputString)
  hash = {}
  result = ""

  97.upto(122) do |i|
    hash[i.chr()] = (122 - i - 97).chr()
  end

  inputString.each_char do |char|
    result += hash[char]
  end

  result
end
