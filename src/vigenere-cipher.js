class VigenereCipheringMachine {
  constructor(toggler) {
    if (toggler === false) {
      this.reversed = true;
    }
  }
  splitToASCII(str) {
    str = str.toUpperCase().split("").map(char => {
      if (/[A-Z]/.test(char)) {
        return char.charCodeAt(0) - 65;
      } else {
        return char;
      }
    })
    return str;
  }
  keyRepeat(str, key) {
    let symbolsToAdd = str.length - key.length;
    for (let i = 0; i < symbolsToAdd; i++) {
      key.push(key[i]);
    }
    return key;
  }
  encrypt(string, key) {
    if (string && key) {
      string = this.splitToASCII(string);
      key = this.splitToASCII(key);
      key = this.keyRepeat(string, key);
      let cipher = [];
      let i = 0;
      let j = 0;
      while (i < string.length) {
        if (Number.isInteger(string[i])) {
          cipher.push(String.fromCharCode((string[i] + key[j]) % 26 + 65));
          i++;
          j++;
        } else {
          String.fromCharCode(cipher.push(string[i]));
          i++;
        }
      }
      if (this.reversed === true) {
        return cipher.reverse().join("");
      } else return cipher.join("");
    }
    else {
      throw new Error("Missing data")
    }
  }
  decrypt(string, key) {
    if (string && key) {
      string = this.splitToASCII(string);
      key = this.splitToASCII(key);
      key = this.keyRepeat(string, key);
      let cipher = [];
      let i = 0;
      let j = 0;
      while (i < string.length) {
        if (Number.isInteger(string[i])) {
          cipher.push(String.fromCharCode((string[i] + 26 - key[j]) % 26 + 65));
          i++;
          j++;
        } else {
          String.fromCharCode(cipher.push(string[i]));
          i++;
        }
      }
      if (this.reversed === true) {
        return cipher.reverse().join("");
      } else return cipher.join("");
    }
    else {
      throw new Error("Missing data")
    }
  }
}
module.exports = VigenereCipheringMachine;