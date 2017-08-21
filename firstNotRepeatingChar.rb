require 'set'

def firstNotRepeatingCharacter(s)
  all_letters = Set.new()
  no_repeats = []

  s.each_char do |char|
    unless all_letters.include?(char)
      no_repeats << char
      all_letters.add(char)
    else
      no_repeats.delete(char) if no_repeats.include?(char)
    end
  end

  no_repeats[0] ? no_repeats[0] : "_"
end
