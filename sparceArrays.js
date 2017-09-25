function processData(input) {
    let inputArr = input.split("\n");
    let strings = inputArr.slice(1, Number(inputArr[0]) + 1);
    let tests = inputArr.slice(Number(inputArr[0]) + 2);

    let result = [];
    let occurances = {};
    let testsSet = new Set();





    for (let i = 0; i < tests.length; i++) {
        testsSet.add(tests[i]);
    }

    for (let i = 0; i < strings.length; i++) {
        if (testsSet.has(strings[i])) {
            if (occurances[strings[i]]) {
                occurances[strings[i]] += 1;
            } else {
                occurances[strings[i]] = 1;
            }
        }
    }

    for (let i = 0; i < tests.length; i++) {
        if (occurances[tests[i]]) {
            result.push(occurances[tests[i]]);
        } else {
            result.push(0);
        }
    }

    console.log(result.join("\n"));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
