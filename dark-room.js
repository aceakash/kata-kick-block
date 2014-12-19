module.exports = function (warnedFor) {
  var expectedIn  = warnedFor,
      result      = null;

  function chain(kick) {
    expectedIn--;
    if (kick === 1) {
      if (result) {
        result = 'KICK';
      }
      else {
        if (expectedIn === 0) {
          result = 'BLOCK';
        }
        else {
          result = 'KICK';
        }
      }
    }

    return chain;
  }

  chain.end = function () {
    return result;
  };

  return chain;
};
