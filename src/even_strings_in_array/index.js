/**
 * @param  {String[]} arr
 * @throws {TypeError}
 * @return {String[]}
 */
export default function evenStrings(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Argument "arr" must be of type array.');
  return arr.filter(
    el => 0 === el.split('').reduce((acc, val) => acc + val.charCodeAt(0), 0) % 2
  );
}
