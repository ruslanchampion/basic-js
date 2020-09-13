const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let copy = Array.apply(null, arr);
  let commands = [
    "--discard-prev",
    "--double-prev",
    "--double-next",
    "--discard-next",]
  copy.map((el, i, array) => {
    switch (el) {
    case "--discard-prev" :
      i > 0 ? (array[i - 1] = undefined) : false;
      break;
    case  "--double-prev":
      i > 0 ? (array[i] = array[i - 1]) : false;
      break;
    case  "--double-next":
      i < array.length - 1 ? (array[i] = array[i + 1]) : false;
      break;
    case "--discard-next":
      i < array.length - 1 ? (array[i + 1] = undefined) : false;
      break;
    }
  });
  return copy.filter((el) => el != undefined && commands.indexOf(el) == -1);
}
