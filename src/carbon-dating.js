const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let activity = parseFloat(sampleActivity);
  if (typeof sampleActivity != 'string') {
    return false;
  }
  if (activity > MODERN_ACTIVITY || activity <= 0) {
    return false;
  }
  if (isNaN(activity)) {
    return false;
  }
  let j = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / j);
};
