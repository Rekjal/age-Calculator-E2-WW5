import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    reusableCalculator = new Calculator();
  });

  test('should correctly create a Calculator object with 5 arguments', () => {
    expect(reusableCalculator.ageOnMercury).toEqual(10);
  });


});