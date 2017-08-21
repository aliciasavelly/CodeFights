# Definition for singly-linked list:
# class ListNode
#   attr_accessor :value, :next
#   def initialize(val)
#     @value = val
#     @next = nil
# end
#
def removeKFromList(l, k)
#     current = l
#     result = []

#     while current
#         result << current.value if current.value != k

#         current = current.next
#     end

#     result
#
    return [] unless l
    # p l
    # p l.next
    while l.value == k && l.next
       l = l.next
    end
    return [] if l.value == k
    last = l
    # p l
    current = l.next
    # p current
    # p current.next
    while current
        p current.value
        if current.value == k
            last.next = current.next
        else
            last = last.next
        end

        current = current.next
    end

    l
end
