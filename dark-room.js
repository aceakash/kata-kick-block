module.exports = function (expectedIn) {
  var result        = null,
      KICK          = 'KICK',
      BLOCK         = 'BLOCK';

  function chain(block) {
    expectedIn--;
    if (block !== 1)
      return chain;
    if (result)
      result = KICK;
    else if (expectedIn === 0)
      result = BLOCK;
    else
      result = KICK;
    return chain;
  }

  chain.end = function () {
    return result || BLOCK;
  };
  return chain;
};
