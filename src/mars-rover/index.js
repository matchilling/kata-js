const COMMAND = {
        BACKWARDS : 'B',
        FORWARD   : 'F',
        LEFT      : 'L',
        RIGHT     : 'R',
        isValid   : cmd => 1 === Object
          .keys(COMMAND)
          .filter(key => cmd === COMMAND[key]).length
      },
      DIRECTION = {
        EAST    : 'EAST',
        NORTH   : 'NORTH',
        SOUTH   : 'SOUTH',
        WEST    : 'WEST',
        isValid : dir => 1 === Object
          .keys(DIRECTION)
          .filter(key => dir === DIRECTION[key]).length
      };

class MarsRover {
  constructor(x, y, direction, obstacles) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new TypeError('Coordinates must be of type integer.');
    }
    if (!DIRECTION.isValid(direction)) {
      throw new Error(`Invalid direction "${direction} given."`);
    }
    if (obstacles !== undefined && !Array.isArray(obstacles)) {
      throw new TypeError('Obstacles must be of type array.');
    }

    this.coordinate = {
      x,
      y
    };
    this.direction = direction;
    this.obstacles = obstacles;
  }

  move(instructions) {
    if ('string' !== typeof instructions) {
      throw new TypeError('Instructions must be of type string.');
    }

    const isBlocked = (x, y) => {
            if (!Array.isArray(this.obstacles)) {
              return false;
            }

            return 0 < this.obstacles.filter(cor => cor[0] === x && cor[1] === y).length;
          },

          parsedInstructions = instructions.split('');
    for (let i = 0; i < parsedInstructions.length; i += 1) {
      const command = parsedInstructions[i];

      if (!COMMAND.isValid(command)) {
        throw new Error(`Invalid direction "${command} given."`);
      }

      if (command === COMMAND.BACKWARDS) {
        switch (this.direction) {
        case DIRECTION.EAST:
          if (isBlocked(this.coordinate.x - 1, this.coordinate.y)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.x -= 1;
          break;
        case DIRECTION.NORTH:
          if (isBlocked(this.coordinate.x, this.coordinate.y - 1)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.y -= 1;
          break;
        case DIRECTION.SOUTH:
          if (isBlocked(this.coordinate.x, this.coordinate.y + 1)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.y += 1;
          break;
        case DIRECTION.WEST:
          if (isBlocked(this.coordinate.x + 1, this.coordinate.y)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.x += 1;
          break;
        default:
        }
      }

      if (command === COMMAND.FORWARD) {
        switch (this.direction) {
        case DIRECTION.EAST:
          if (isBlocked(this.coordinate.x + 1, this.coordinate.y)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.x += 1;
          break;
        case DIRECTION.NORTH:
          if (isBlocked(this.coordinate.x, this.coordinate.y + 1)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.y += 1;
          break;
        case DIRECTION.SOUTH:
          if (isBlocked(this.coordinate.x, this.coordinate.y - 1)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.y -= 1;
          break;
        case DIRECTION.WEST:
          if (isBlocked(this.coordinate.x - 1, this.coordinate.y)) {
            return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction} STOPPED`;
          }
          this.coordinate.x -= 1;
          break;
        default:
        }
      }

      if (command === COMMAND.LEFT) {
        switch (this.direction) {
        case DIRECTION.EAST:
          this.direction = DIRECTION.NORTH;
          break;
        case DIRECTION.NORTH:
          this.direction = DIRECTION.WEST;
          break;
        case DIRECTION.SOUTH:
          this.direction = DIRECTION.EAST;
          break;
        case DIRECTION.WEST:
          this.direction = DIRECTION.SOUTH;
          break;
        default:
        }
      }

      if (command === COMMAND.RIGHT) {
        switch (this.direction) {
        case DIRECTION.EAST:
          this.direction = DIRECTION.SOUTH;
          break;
        case DIRECTION.NORTH:
          this.direction = DIRECTION.EAST;
          break;
        case DIRECTION.SOUTH:
          this.direction = DIRECTION.WEST;
          break;
        case DIRECTION.WEST:
          this.direction = DIRECTION.NORTH;
          break;
        default:
        }
      }
    }

    return `(${this.coordinate.x}, ${this.coordinate.y}) ${this.direction}`;
  }
}

export default MarsRover;
