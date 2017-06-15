function arrayChange(inputArray) {
    let total = 0;
    let last = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= last) {
            total += (last - inputArray[i]) + 1;
            last += 1;
        } else {
            last = inputArray[i];
        }
    }

    return total;
}
