require 'set'

def firstDuplicate(a)
  nums = Set.new()

  a.each do |n|
    return n if nums.include?(n)
    nums.add(n)
  end

  -1
end
