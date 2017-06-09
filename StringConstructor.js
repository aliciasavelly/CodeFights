function stringsConstruction(a, b) {
    var currentString = b;
    var building = [];
    var count = 0;
    var current = "";
    var aHash = {};
    var notComplete = true;

    for (var j = 0; j < a.length; j++) {
        aHash[a[j]] = j;
    }

    while (true) {
        for (var i = 0; i < currentString.length; i++) {
            // console.log(building);
            // console.log(aHash[currentString[i]]);
            // console.log(currentString[i]);
            // console.log(aHash[currentString[i]] != undefined);
            if (aHash[currentString[i]] != undefined && !building[aHash[currentString[i]]]) {
                building[aHash[currentString[i]]] = currentString[i];
                // console.log("if:");
                // console.log(building[aHash[currentString[i]]]);
                // console.log(currentString[i]);
            } else {
                // console.log("else:");
                // console.log(currentString[i]);
                current += currentString[i];
            }
            // console.log(aHash);
            // console.log(b);
            // console.log(building);
        }
        console.log(current);

        if (building.length < a.length) {
            return count;
        }
        building = [];
        currentString = current;
        current = "";
        count += 1;
    }
}
