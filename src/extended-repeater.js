module.exports = function repeater(str, options) {
  let separator = '+';
  let repeatTimes = 1;
  let addition = '';
  let additionOptions = {};
  if (options.additionRepeatTimes) {
    additionOptions.repeatTimes = options.additionRepeatTimes;
  }
  if (options.additionSeparator) {
    additionOptions.separator = options.additionSeparator;
  }
  if (options.repeatTimes) {
    repeatTimes = options.repeatTimes;
  }
  if (options.separator) {
    separator = options.separator;
  }
  if (options.addition !== undefined) {
    addition = options.addition;
    addition = repeater(addition, additionOptions);
  }
  return (new Array(repeatTimes)).fill(str + addition).join(separator)
};

