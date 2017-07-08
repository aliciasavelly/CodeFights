def smallestNumber(n)
  return 0 if n == 1

  result = "1"

  (1...n).each do |el|
    result += "0"
  end

  return result.to_i
end

# p smallestNumber(1)
# p smallestNumber(2)
# p smallestNumber(3)
