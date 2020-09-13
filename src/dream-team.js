const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members) || members.length === 0) return false;
  return members.filter(item => (typeof item === 'string' && item.length !== 0)).map(item => {
    return item.replace(/\s/g, '')
  }).map(item => item[0].toUpperCase()).sort().join('');
};
