var jsSHA = require('jssha');

module.exports = function hash(i) {
  const value = Math.random();

  var shaObj = new jsSHA('SHA-512', 'TEXT');
  shaObj.update(i.toString());
  return shaObj.getHash('B64');
};
