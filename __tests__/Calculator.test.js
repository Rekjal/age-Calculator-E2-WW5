import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    reusableCalculator = new Calculator(65, 1.10, 1.15, 0.900, 0.950);
  });

  test('should correctly call method "ageOnPlanets" and confirm value for "ageOnMercury"', () => {
    reusableCalculator.ageOnPlanets(45,[0.24, 0.62, 1.00, 1.88, 11.86]);
    expect(reusableCalculator.ageOnMercury).toEqual(187);
  });

  test('should correctly call method "ageOnPlanets" and confirm value for "ageOnVenus"', () => {
    reusableCalculator.ageOnPlanets(45,[0.24, 0.62, 1.00, 1.88, 11.86]);
    expect(reusableCalculator.ageOnVenus).toEqual(72);
  });

  test('should correctly call method "ageOnPlanets" and confirm value for "ageOnEarth"', () => {
    reusableCalculator.ageOnPlanets(45,[0.24, 0.62, 1.00, 1.88, 11.86]);
    expect(reusableCalculator.ageOnEarth).toEqual(45);
  });

  test('should correctly call method "ageOnPlanets" and confirm value for "ageOnMars"', () => {
    reusableCalculator.ageOnPlanets(45,[0.24, 0.62, 1.00, 1.88, 11.86]);
    expect(reusableCalculator.ageOnMars).toEqual(23);
  });

  test('should correctly call method "ageOnPlanets" and confirm value for "ageOnJupiter"', () => {
    reusableCalculator.ageOnPlanets(45,[0.24, 0.62, 1.00, 1.88, 11.86]);
    expect(reusableCalculator.ageOnJupiter).toEqual(3);
  });
  
  test('should correctly call property "demoELECorrection" inside class', () => {
    expect(reusableCalculator.demoELECorrection).toEqual({ caucasian: 1.10, asian: 1.15, africanAmerican: 0.90, latino: 0.95 });
  });
  test('should correctly call property "estimatedLifeExp" inside class', () => {
    expect(reusableCalculator.estimatedLifeExp).toEqual(65);
  });

  test('should correctly call method "yearsRemaining" inside class', () => {
    expect(reusableCalculator.yearsRemaining()).toEqual(undefined);
  });

});