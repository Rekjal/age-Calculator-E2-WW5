import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    reusableCalculator = new Calculator(1, 2, 3, 4, 5);
  });

  test('should correctly create a Calculator object with 5 arguments', () => {
    expect(reusableCalculator.ageOnMercury).toEqual(1);
  });

  test('should correctly call method "ageOnPlanets" inside class', () => {
    expect(reusableCalculator.ageOnPlanets(20,[1,2,3,4,5])).toEqual(undefined);
  });

  test('should correctly call property "demoELECorrection" inside class', () => {
    expect(reusableCalculator.demoELECorrection).toEqual({caucasian: 1.10, asian: 1.15, africanAmerican: 0.90, latino: 0.95});
  });
  test('should correctly call property "estimatedLifeExp" inside class', () => {
    expect(reusableCalculator.estimatedLifeExp).toEqual(65);
  });
  

  test('should correctly call method "yearsRemaining" inside class', () => {
    expect(reusableCalculator.yearsRemaining()).toEqual(undefined);
  });

});