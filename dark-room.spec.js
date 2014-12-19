var darkRoom = require('./dark-room');

describe('darkRoom', function () {
  it('is a function', function () {
    expect(typeof darkRoom).toBe('function');
  });

  it('returns a function', function () {
    expect(typeof darkRoom()).toBe('function');
  });

  it('returns a function with an "end" function', function () {
    var returnedFunction = darkRoom();
    expect(typeof returnedFunction.end).toBe('function');
  });

  it('returns BLOCK when blocked correctly', function () {
    var result = darkRoom(1)(1).end();
    expect(result).toBe('BLOCK');

    result = darkRoom(2)()(1).end();
    expect(result).toBe('BLOCK');

    result = darkRoom(4)()()()(1).end();
    expect(result).toBe('BLOCK');
  });

  it('returns BLOCK when there are empty calls after a successful block', function () {
    var result = darkRoom(1)(1)().end();
    expect(result).toBe('BLOCK');

    result = darkRoom(2)()(1)()()()()()().end();
    expect(result).toBe('BLOCK');

    result = darkRoom(3)()()(1)()()()()().end();
    expect(result).toBe('BLOCK');
  });

  it('returns KICK when block is too late', function () {
    var result = darkRoom(2)(1)()()()()()()().end();
    expect(result).toBe('KICK');

    result = darkRoom(3)()(1).end();
    expect(result).toBe('KICK');

    result = darkRoom(6)()()()(1).end();
    expect(result).toBe('KICK');
  });

  it('returns KICK when block is too early', function () {
    var result = darkRoom(2)()()(1)()()()()().end();
    expect(result).toBe('KICK');

    result = darkRoom(3)()()()()(1).end();
    expect(result).toBe('KICK');

    result = darkRoom(6)()()()()()()()()()()(1)()().end();
    expect(result).toBe('KICK');
  });

  it('returns KICK when there is no block', function () {
    var result = darkRoom(2)()()().end();
    expect(result).toBe('KICK');
  });

  it('cheaters: returns KICK when more than one blocks received', function () {
    var result = darkRoom(2)(1)(1)()()()()()().end();
    expect(result).toBe('KICK');

    result = darkRoom(2)()(1)(1)()()()()().end();
    expect(result).toBe('KICK');

    result = darkRoom(2)(1)(1)(1)(1)(1)(1)(1)(1).end();
    expect(result).toBe('KICK');
  });
});
