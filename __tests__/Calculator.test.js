import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    reusableCalculator = new Calculator(1, 2, 3, 4, 5);
  });

  test('should correctly create a Calculator object with 5 arguments', () => {
    expect(reusableCalculator.ageOnMercury).toEqual(1);
  });


});