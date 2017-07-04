def damaged_or_sunk (board, attacks)
  result = { 'sunk' => 0, 'damaged' => 0, 'not_touched' => 0, 'points' => 0 }
  countBoats = 0
  boats = {}
  countHits = 0
  hitBoats = {}

  (0...board.length).each do |i|
    (0...board[0].length).each do |j|
      if boats[board[i][j]].nil? && board[i][j] != 0
        boats[board[i][j]] = 1
        countBoats += 1
      elsif !boats[board[i][j]].nil?
        boats[board[i][j]] += 1
      end
    end
  end

  result['not_touched'] = countBoats

  attacks.each do |attack|
    row = board.length - attack[1]
    col = attack[0] - 1
    if board[row][col] != 0
      boats[board[row][col]] -= 1
      if boats[board[row][col]] == 0
        result['sunk'] += 1
      end

      unless hitBoats[board[row][col]]
        hitBoats[board[row][col]] = true
        countHits += 1
      end
    end
  end

  result['not_touched'] -= countHits
  result['damaged'] = countHits - result['sunk']
  result['points'] = result['sunk'] - result['not_touched'] + 0.5 * result['damaged']

  result
end
