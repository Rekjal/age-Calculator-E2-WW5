import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    reusableCalculator = new Calculator();
  });

  test('should correctly call "Calculator" class construtor with no arguments', () => {
    expect(reusableCalculator).toEqual({});
  });
  
});