function regularBracketSequence1(sequence) {
    for (var i = 0; i < sequence.length; i ++) {
        for (var j = i + 1; j < sequence.length; j++) {
            if (sequence[i] == "(" && sequence[j] == ")") {
                sequence = sequence.slice(0, i) + " " + sequence.slice(i + 1, j) + " " + sequence.slice(j + 1, sequence.length);
                break;
            }
        }
    }

    return sequence * 2 == 0;
    // return !(sequence.split("").includes(")") || sequence.split("").includes("("));
}
