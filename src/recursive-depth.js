module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, res = []) {
    res.push(count);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], count + 1, res)
      }
    }
    return res.sort((a, b) => b - a)[0];
  }
};