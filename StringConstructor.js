function stringsConstruction(a, b) {
    if (a.length == 0 || b.length == 0) {
        return 0;
    }

    var aHash = constructHash(a);
    var bHash = constructHash(b);
    var multiplier = 0;

    for (var key in aHash) {
        if (bHash[key] == undefined) {
            return 0;
        } else if (multiplier == 0) {
            multiplier = Math.floor(bHash[key] / aHash[key]);
        } else if (multiplier > Math.floor(bHash[key] / aHash[key])) {
            multiplier = Math.floor(bHash[key] / aHash[key]);
        }
    }

    return multiplier;
}

function constructHash(string) {
    var h = {};
    for (var i = 0; i < string.length; i++) {
        if (h[string[i]] == undefined) {
            h[string[i]] = 1;
        } else {
            h[string[i]] += 1;
        }
    }

    return h;
}
