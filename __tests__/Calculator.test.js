import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    const agePlanetBasedAdjust = {mercury: 0.24,venus: 0.62, earth: 1.00, mars: 1.88, jupiter: 11.86};
    const raceBasedLifeExpOnEarth = {caucasian: 65, asian: 70, africanAmerican: 65, latino: 4};
    const planets = ["mercury", "venus", "earth", "mars", "jupiter"];
    reusableCalculator = new Calculator(45,"caucasian", "female", planets);
  });
 
  test('should correctly call construtor with arguments', () => {
    expect(reusableCalculator).toEqual({userInputAge: 45, race: "caucasian", gender: "female", planets: ["mercury", "venus", "earth", "mars", "jupiter"], agePerPlanet: {}, planetId: -1});
  });

  test('should correctly call method "assignPlanetId"', () => {
    reusableCalculator.assignPlanetId();
    expect(reusableCalculator.planetId).toEqual(0);
    reusableCalculator.planetId = -1; //set value back to default so as to not impact future tests
  });
  
});