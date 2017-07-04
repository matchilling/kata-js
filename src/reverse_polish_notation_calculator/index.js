/**
 * Reverse Polish Notation Calculator
 * @param  {String} expr
 * @throws {Error}
 * @throws {TypeError}
 * @return {Number}
 */
export default function calc(expr) {
  if ('string' !== typeof expr) throw new TypeError('Argument "expr" must be of type string.');
  if ('' === expr) return 0;

  const calculate = (operator, operand01, operand02) => {
          switch (operator) {
          case '+':
            return operand01 + operand02;
          case '-':
            return operand01 - operand02;
          case '*':
            return operand01 * operand02;
          case '/':
            return operand01 / operand02;
          default:
            throw new Error(`Unsupported operator "${operator}" given.`);
          }
        },
        stack = [];

  expr.split(' ').forEach((token) => {
    if (isNaN(token)) {
      const operand02 = stack.pop(),
            operand01 = stack.pop();

      stack.push(calculate(token, operand01, operand02));
    } else stack.push(parseFloat(token));
  });

  return stack.pop();
}
