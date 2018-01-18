/**
 * @param  {Number} number
 * @param  {String} [prefix='']
 * @throws {TypeError}
 * @return {void}
 */
export default function printBinary(number, prefix = '') {
  if (!Number.isInteger(number)) { throw new TypeError('Argument number must be of type integer.'); }

  if (0 === number) { return process.stdout.write(`${prefix}\n`); }

  printBinary(number - 1, `${prefix}0`);
  printBinary(number - 1, `${prefix}1`);

  return undefined;
}
