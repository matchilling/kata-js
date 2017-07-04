import { assert } from 'chai';
import n00bify from './../../src/n00bify';
import pkg from '../../package.json';

describe(`${pkg.name}/n00bify`, () => {
  it('Should throw a type error if input argument is not a string', () => {
    assert.throws(() => n00bify(123), TypeError, 'Argument "text" must be of type string.');
  });
  it('Should remove periods, commas and apostrophes', () => {
    assert.equal(n00bify('.'), '');
    assert.equal(n00bify(','), '');
    assert.equal(n00bify('\''), '');
  });
  it('"to" and "too" should be replaced by the number 2', () => {
    assert.equal(n00bify('today'), '2day');
    assert.equal(n00bify('too'), '2');
  });
  it('"for" and "fore" should be replaced by the number 4', () => {
    assert.equal(n00bify('for'), '4');
    assert.equal(n00bify('fore'), '4');
  });
  it('"oo" should be replaced by two zeros', () => {
    assert.equal(n00bify('noob'), 'n00b');
  });
  it('"be", "are", "you", "please", "people", "really", "have", and "know" should be changed to "b", "r", "u", "plz", "ppl", "rly", "haz", and "no"', () => {
    assert.equal(n00bify('be'), 'b');
    assert.equal(n00bify('are'), 'r');
    assert.equal(n00bify('you'), 'u');
    assert.equal(n00bify('please'), 'plz');
    assert.equal(n00bify('people'), 'ppl');
    assert.equal(n00bify('really'), 'rly');
    assert.equal(n00bify('have'), 'HAZ');
    assert.equal(n00bify('know'), 'no');
  });
  it('The letter "s" should always be replaced by a "z", maintaining case', () => {
    assert.equal(n00bify('S'), 'Z');
    assert.equal(n00bify('s'), 'z');
  });
  it('"LOL" must be added to the beginning of any input string starting with a "w" or "W"', () => {
    assert.equal(n00bify('What the hell'), 'LOL WHAT the HELL');
  });
  it('"OMG" must be added to the beginning (after LOL, if applicable,) of a string 32 characters or longer', () => {
    assert.equal(n00bify('xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx'), 'OMG XXX xxx XXX xxx XXX xxx XXX xxx XXX xxx XXX');
  });
  it('All evenly numbered words must be in ALL CAPS', () => {
    assert.equal(n00bify('Cake is very delicious'), 'Cake IZ very DELICIOUZ');
    assert.equal(n00bify('I think it would be nice if we could all get along.'), 'OMG I think IT would B nice IF we COULD all GET along');
  });
  it('If the input string starts with "h" or "H", the entire output string should be in ALL CAPS', () => {
    assert.equal(n00bify('Holy shit'), 'HOLY ZHIT');
  });
  it('A question mark should have more question marks added to it, equal to the number of words in the sentence ', () => {
    assert.equal(n00bify('Hi, how are you today?'), 'HI HOW R U 2DAY?????');
    assert.equal(n00bify('Are you a foo?'), 'r U a F00????');
  });
  it('An exclamation mark should have more question marks added to it, equal to the number of words in the sentence ', () => {
    assert.equal(n00bify('You are a foo!'), 'u R a F00!1!1');
    assert.equal(n00bify('Let\'s eat, Grandma!'), 'Letz EAT Grandma!1!');
  });
});
