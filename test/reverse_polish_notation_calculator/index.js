import { assert } from 'chai';
import calc from './../../src/reverse_polish_notation_calculator';
import pkg from '../../package.json';

describe(`${pkg.name}/reverse_polish_notation_calculator`, () => {
  it('Should throw a type error if input argument is not a string', () => {
    assert.throws(() => calc(123), TypeError, 'Argument "expr" must be of type string.');
  });
  it('Should return zero if an empty string is given', () => {
    assert.equal(calc(''), 0);
  });
  it('Should parse integers', () => {
    assert.equal(calc('1 2 3'), 3);
  });
  it('Should parse floating point numbers', () => {
    assert.equal(calc('1 2 3.5'), 3.5);
  });
  it('Should support addition', () => {
    assert.equal(calc('1 3 +'), 4);
  });
  it('Should support multiplication', () => {
    assert.equal(calc('1 3 *'), 3);
  });
  it('Should support subtraction', () => {
    assert.equal(calc('1 3 -'), -2);
  });
  it('Should support division', () => {
    assert.equal(calc('4 2 /'), 2);
  });
  it('Should throw an error if a operator is not supported', () => {
    assert.throws(() => calc('1 2 ^'), Error, 'Unsupported operator "^" given.');
  });
});
