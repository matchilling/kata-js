import {
  assert
} from 'chai';
import BowlingGame from '../../src/bowling';
import pkg from '../../package.json';

describe(`${pkg.name}/BowlingGame`, () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('Should create an instance of BowlingGame.', () => {
    assert.instanceOf(game, BowlingGame);
  });

  it('Play a gutter game with score 0', () => {
    for (let i = 1; i <= 10; i += 1) {
      game.roll(0);
      game.roll(0);
    }

    assert.equal(game.score(), 0);
  });

  it('Play a simple game and score 20', () => {
    for (let i = 1; i <= 10; i += 1) {
      game.roll(1);
      game.roll(1);
    }

    assert.equal(game.score(), 20);
  });

  it('Play the example game and score 133', () => {
    game.roll(1);
    game.roll(4);

    game.roll(4);
    game.roll(5);

    game.roll(6);
    game.roll(4);

    game.roll(5);
    game.roll(5);

    game.roll(10);

    game.roll(0);
    game.roll(1);

    game.roll(7);
    game.roll(3);

    game.roll(6);
    game.roll(4);

    game.roll(10);

    game.roll(2);
    game.roll(8);

    game.roll(6);

    assert.equal(game.score(), 133);
  });

  describe(`${pkg.name}/BowlingGame#roll`, () => {
    it('Should throw a type error if argument pins is not of type integer.', () => {
      assert.throws(
        () => {
        game.roll('not_an_integer')
      }, TypeError, 'Argument pins must be of typ integer.');
    });
  });
});
