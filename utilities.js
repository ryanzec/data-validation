module.exports = {
  isNumber: function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  },
  isString: function(value) {
    return Object.prototype.toString.call(value) === '[object String]';
  }
};