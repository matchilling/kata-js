'use strict';

const maxFrames = 10;

class BowlingGame {
  constructor() {
    /**
     * @private
     * @type {Array}
     */
    this.frames = [];
  }


  /**
   * @private
   * @param  {Array} frame
   * @return {Boolean}
   */
  static isSpare(frame) {
    return !BowlingGame.isStrike(frame) && 2 === frame.length && 10 === (frame[0] + frame[1]);
  }

  /**
   * @private
   * @param  {Array} frame
   * @return {Boolean}
   */
  static isStrike(frame) {
    return 2 === frame.length && 10 === frame[0] && 0 === frame[1];
  }

  /**
   * @private
   * @param  {Array} frame
   * @return {Number}
   */
  static frameScore(frame) {
    return frame.reduce((sum, score) => sum + score, 0);
  }

  /**
   * @param  {Number} pins - Number of pins knocked down
   * @throws {TypeError}
   * @return {undefined}
   */
  roll(pins) {
    if (!Number.isInteger(pins)) {
      throw new TypeError('Argument pins must be of typ integer.');
    }

    if (10 === pins) {
      this.frames.push([pins, 0]);
    } else if (0 === this.frames.length) {
      this.frames.push([pins]);
    } else if (2 <= this.frames[this.frames.length - 1].length) {
      this.frames.push([pins]);
    } else {
      this.frames[this.frames.length - 1].push(pins);
    }
  }

  /**
   * @return {Number}
   */
  score() {
    return this.frames.reduce((acc, frame, index, frames) => {
      const nextFrame = undefined !== frames[index + 1]
              ? frames[index + 1]
              : [],
            followingFrame = undefined !== frames[index + 2]
              ? frames[index + 2]
              : [];

      let score = BowlingGame.frameScore(frame);

      if (BowlingGame.isStrike(frame)) {
        score += nextFrame[0];

        if (BowlingGame.isStrike(followingFrame)) {
          score += followingFrame[0];
        }
      }

      if (BowlingGame.isSpare(frame)) {
        score += BowlingGame.frameScore(nextFrame);
      }

      if (maxFrames >= index + 1) {
        return acc + score;
      }

      return acc;
    }, 0);
  }
}

export default BowlingGame;
