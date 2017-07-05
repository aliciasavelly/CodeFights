def merge_lists(list1, list2)
  i = 0
  j = 0
  result = []

  while result.length < list1.length + list2.length
    if list1[i] && list2[j] && list1[i] < list2[j]
      result << list1[i]
      i += 1
    elsif list2[j]
      result << list2[j]
      j += 1
    end
  end

  result
end

my_list     = [3, 4, 6, 10, 11, 15]
alices_list = [1, 5, 8, 12, 14, 19]

p merge_lists(my_list, alices_list)
# prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
