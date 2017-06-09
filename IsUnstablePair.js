function isUnstablePair(filename1, filename2) {
    if ((filename1 < filename2) != (filename1.toUpperCase() < filename2) || (filename1 < filename2) != (filename1 < filename2.toUpperCase())) {
        return true;
    }

    return false;
}
