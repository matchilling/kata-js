/**
 * @param  {String} string
 * @throws {TypeError}
 * @return {String}
 */
export default function findFirstRecurringChar(string) {
  if ('string' !== typeof string) throw new TypeError('Argument "string" must be of type string.');

  const map = new Map();
  for (let i = 0; i < string.length; i += 1) {
    const char = string.charAt(i);
    if (map.has(char)) { return char; }
    map.set(char, true);
  }

  return '';
}
