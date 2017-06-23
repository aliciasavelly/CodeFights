function neighbouringElements(a) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[0].length; j++) {
            if (a[i][j + 1] != undefined && a[i][j + 1] == a[i][j]) {
                result += 1;
            }
            if (a[i + 1] != undefined && a[i + 1][j] == a[i][j]) {
                result += 1;
            }
        }
    }

    return result;
}
