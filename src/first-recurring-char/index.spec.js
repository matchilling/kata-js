import { assert } from 'chai';
import findFirstRecurringChar from './';
import pkg from '../../package.json';

describe(`${pkg.name}/findFirstRecurringChar`, () => {
  it('Should throw a type error if input argument is not a string', () => {
    assert.throws(() => findFirstRecurringChar(123), TypeError, 'Argument "string" must be of type string.');
  });

  it('Should return an empty string if the input does not contains a recurring character', () => {
    assert.equal(findFirstRecurringChar('abcdefg'), '');
  });

  it('Should return "A"', () => {
    assert.equal(findFirstRecurringChar('abca'), 'a');
  });

  it('Should return "B"', () => {
    assert.equal(findFirstRecurringChar('dbcaba'), 'b');
  });
});
