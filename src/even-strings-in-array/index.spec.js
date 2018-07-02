import { assert } from 'chai';
import evenStrings from './';
import pkg from '../../package.json';

describe(`${pkg.name}/even_strings_in_array`, () => {
  it('Should throw a type error if input argument is not an array', () => {
    assert.throws(() => evenStrings('not_an_array'), TypeError, 'Argument "arr" must be of type array.');
  });
  it('Should return an array of strings where the sum of all ASCII characters within that string is an even number.', () => {
    assert.deepEqual(evenStrings(['a']), []);
    assert.deepEqual(evenStrings(['b']), ['b']);
    assert.deepEqual(
      evenStrings(['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'xy']),
      ['abc', 'ghi', 'mno', 'stu']
    );
  });
});
