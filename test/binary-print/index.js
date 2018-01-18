import { assert } from 'chai';
import component from './../../src/binary-print';
import pkg from '../../package.json';

const captureStream = (stream) => {
  const buffer = [],
        writer = stream.write;

  Object.assign(stream, {
    write : function(chunk) {
      buffer.push(chunk.toString());
      writer.apply(stream, arguments);
    }
  });

  return {
    captured : () => buffer.join(''),
    unhook   : () => {
      Object.assign(stream, { write : writer });
    }
  };
};

describe(`${pkg.name}/binary-print`, () => {
  let stdout;

  beforeEach(() => {
    stdout = captureStream(process.stdout);
  });

  afterEach(() => {
    stdout.unhook();
  });

  it('Should print binary sequence from 00 to 11', () => {
    assert.isUndefined(component(2));
    assert.equal(stdout.captured(), '00\n01\n10\n11\n');
  });

  it('Should print binary sequence from 000 to 111', () => {
    assert.isUndefined(component(3));
    assert.equal(stdout.captured(), '000\n001\n010\n011\n100\n101\n110\n111\n');
  });

  it('Should print binary sequence from 0000 to 1111', () => {
    assert.isUndefined(component(4));
    assert.equal(stdout.captured(), '0000\n0001\n0010\n0011\n0100\n0101\n0110\n0111\n1000\n1001\n1010\n1011\n1100\n1101\n1110\n1111\n');
  });
});
