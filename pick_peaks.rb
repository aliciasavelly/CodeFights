def pick_peaks(arr)
  result = { 'pos' => [], 'peaks' => [] }

  i = 1
  while i < arr.length - 1
    if arr[i] > arr[i - 1] && arr[i] > arr[i + 1]
      result['pos'] << i
      result['peaks'] << arr[i]
    end

    if arr[i] > arr[i - 1] && arr[i] == arr[i + 1]
      current = arr[i]
      currentI = i
    end

    if current && arr[i] == current && arr[i] != arr[i + 1]
      current = nil

      if arr[i] > arr[i + 1]
        result['pos'] << currentI
        result['peaks'] << arr[i]
      end
    end

    i += 1
  end

  result
end
