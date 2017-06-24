function decodeRLE(code) {
  let count = 0;
  let charCode;
  let current = "";

  for (let i = 0; i < code.length; i++) {
    charCode = code.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      current += code[i];
    } else {
      count += Number(current);
      current = "";
    }
  }

  return count + Number(current);
}
