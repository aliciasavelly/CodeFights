def permutationCipher(password, key):
    table = string.maketrans("abcdefghijklmnopqrstuvwxyz", key)
    return str(password).translate(table)
