/**
 * @param  {String} text
 * @throws {TypeError}
 * @return {String}
 */
export default function n00bify(text) {
  if ('string' !== typeof text) throw new TypeError('Argument "text" must be of type string.');

  const punctuationPattern = /\.|,|'/g,
        replaceables = new Map()
            .set('too', '2')
            .set('Too', '2')
            .set('to', '2')
            .set('To', '2')
            .set('fore', '4')
            .set('Fore', '4')
            .set('for', '4')
            .set('For', '4')
            .set('oo', '00')
            .set('OO', '00')
            .set('be', 'b')
            .set('Be', 'b')
            .set('are', 'r')
            .set('Are', 'r')
            .set('you', 'u')
            .set('You', 'u')
            .set('please', 'plz')
            .set('Please', 'plz')
            .set('people', 'ppl')
            .set('People', 'ppl')
            .set('really', 'rly')
            .set('Really', 'rly')
            .set('have', 'haz')
            .set('Have', 'haz')
            .set('know', 'no')
            .set('Know', 'no')
            .set('s', 'z')
            .set('S', 'Z'),
        repeatSeq = (n, seq, acc) => {
          const val = seq.shift();
          seq.push(val);
          return 0 < n ? repeatSeq(n - 1, seq, acc + val) : acc;
        },
        transform = (word) => {
          let res = word;
          replaceables.forEach((val, key) => { res = res.replace(new RegExp(key, 'g'), val); });
          return res;
        };

  let res = text
      .split(' ')
      .reduce((acc, token) => `${acc} ${transform(token)}`, '')
      .replace(punctuationPattern, '')
      .trim();

  if (0 === res.indexOf('w') || 0 === res.indexOf('W')) res = `LOL ${res}`;
  if (0 === res.indexOf('h') || 0 === res.indexOf('H')) res = res.toUpperCase();
  if (32 < res.length) res = `OMG ${res}`;
  if (0 < res.indexOf('?')) res = res.replace(/\?/g, repeatSeq(res.split(' ').length, ['?'], ''));
  if (0 < res.indexOf('!')) res = res.replace(/!/g, repeatSeq(res.split(' ').length, ['!', '1'], ''));

  return res.split(' ')
      .reduce((acc, token, index) => `${acc} ${0 !== index % 2 ? token.toUpperCase() : token}`, '')
      .trim();
}
