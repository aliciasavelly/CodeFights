function createAnagram(s, t) {
    var sHash = {};
    for (var i = 0; i < s.length; i++) {
        if (sHash[s[i]] == undefined) {
            sHash[s[i]] = 1;
        } else {
            sHash[s[i]] += 1;
        }
    }

    for (var j = 0; j < t.length; j++) {
        if (sHash[t[j]] != undefined && sHash[t[j]] > 0) {
            sHash[t[j]] -= 1;
        }
    }

    var result = 0;
    for (var key in sHash) {
        result += sHash[key];
    }

    return result;
}
