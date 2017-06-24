function firstDuplicate(a) {
    var nums = {};

    for (var i = 0; i < a.length; i++) {
        if (nums[a[i]] != undefined) {
            return a[i];
        }
        nums[a[i]] = 1;
    }

    return -1;
}
