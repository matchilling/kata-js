import { assert } from 'chai';
import MarsRover from './index';
import pkg from '../../package.json';

describe(`${pkg.name}/mars-rover`, () => {
  it('initialises with starting point (x, y) and a given direction (NORTH, SOUTH, EAST, WEST)', () => {
    const rover = new MarsRover(4, 2, 'EAST');

    assert.instanceOf(rover, MarsRover);
    assert.equal(rover.coordinate.x, 4);
    assert.equal(rover.coordinate.y, 2);
    assert.equal(rover.direction, 'EAST');
  });
  it('throws an error if coordinates are not integers', () => {
    assert.throws(() => new MarsRover(-1.5, 0.1, 'EAST'), TypeError);
  });
  it('throws an error if direction is not supported', () => {
    assert.throws(() => new MarsRover(0, 0, 'DOES_NOT_EXIST'), Error);
  });

  describe('#move', () => {
    it('throws an error if instructions are not of type string', () => {
      const rover = new MarsRover(0, 0, 'EAST');
      assert.throws(() => rover.move(1111), TypeError);
    });

    it('throws an error if instructions are not supported', () => {
      const rover = new MarsRover(0, 0, 'EAST');
      assert.throws(() => rover.move('XXX'), Error);
    });

    it('moves to (6, 4) NORTH', () => {
      const rover = new MarsRover(4, 2, 'EAST');
      assert.equal(rover.move('FLFFFRFLB'), '(6, 4) NORTH');
    });

    describe('backwards', () => {
      it('moves backwards, heading EAST', () => {
        const rover = new MarsRover(0, 0, 'EAST');
        assert.equal(rover.move('B'), '(-1, 0) EAST');
      });
      it('moves backwards, heading NORTH', () => {
        const rover = new MarsRover(0, 0, 'NORTH');
        assert.equal(rover.move('B'), '(0, -1) NORTH');
      });
      it('moves backwards, heading SOUTH', () => {
        const rover = new MarsRover(0, 0, 'SOUTH');
        assert.equal(rover.move('B'), '(0, 1) SOUTH');
      });
      it('moves backwards, heading WEST', () => {
        const rover = new MarsRover(0, 0, 'WEST');
        assert.equal(rover.move('B'), '(1, 0) WEST');
      });
    });

    describe('forward', () => {
      it('moves forward, heading EAST', () => {
        const rover = new MarsRover(0, 0, 'EAST');
        assert.equal(rover.move('F'), '(1, 0) EAST');
      });
      it('moves forward, heading NORTH', () => {
        const rover = new MarsRover(0, 0, 'NORTH');
        assert.equal(rover.move('F'), '(0, 1) NORTH');
      });
      it('moves forward, heading SOUTH', () => {
        const rover = new MarsRover(0, 0, 'SOUTH');
        assert.equal(rover.move('F'), '(0, -1) SOUTH');
      });
      it('moves forward, heading WEST', () => {
        const rover = new MarsRover(0, 0, 'WEST');
        assert.equal(rover.move('F'), '(-1, 0) WEST');
      });
    });

    describe('left', () => {
      it('rotates left by 90 degrees, heading EAST', () => {
        const rover = new MarsRover(0, 0, 'EAST');
        assert.equal(rover.move('L'), '(0, 0) NORTH');
      });
      it('rotates left by 90 degrees, heading NORTH', () => {
        const rover = new MarsRover(0, 0, 'NORTH');
        assert.equal(rover.move('L'), '(0, 0) WEST');
      });
      it('rotates left by 90 degrees, heading WEST', () => {
        const rover = new MarsRover(0, 0, 'WEST');
        assert.equal(rover.move('L'), '(0, 0) SOUTH');
      });
      it('rotates left by 90 degrees, heading SOUTH', () => {
        const rover = new MarsRover(0, 0, 'SOUTH');
        assert.equal(rover.move('L'), '(0, 0) EAST');
      });
    });

    describe('right', () => {
      it('rotates right by 90 degrees, heading EAST', () => {
        const rover = new MarsRover(0, 0, 'EAST');
        assert.equal(rover.move('R'), '(0, 0) SOUTH');
      });
      it('rotates right by 90 degrees, heading NORTH', () => {
        const rover = new MarsRover(0, 0, 'NORTH');
        assert.equal(rover.move('R'), '(0, 0) EAST');
      });
      it('rotates right by 90 degrees, heading WEST', () => {
        const rover = new MarsRover(0, 0, 'WEST');
        assert.equal(rover.move('R'), '(0, 0) NORTH');
      });
      it('rotates right by 90 degrees, heading SOUTH', () => {
        const rover = new MarsRover(0, 0, 'SOUTH');
        assert.equal(rover.move('R'), '(0, 0) WEST');
      });
    });
  });
});
