function reverseString(string) {
  let result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

console.log(reverseString("alicia") == "aicila");


class ReverseString {
  constructor(string) {
    this.string = string;
  }

  reverseString() {
    let result = "";

    for (let i = this.string.length - 1; i >= 0; i--) {
      result += this.string[i];
    }

    return result;
  }
}

class Interface extends ReverseString {
  constructor(string) {
    this.string = string;
  }
}

let i = new Interface("coding is fun");
console.log(i.reverseString());
