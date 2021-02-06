import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    const planets = ["mercury", "venus", "earth", "mars", "jupiter"];
    reusableCalculator = new Calculator(45,"caucasian", "female", planets);
  });

  test('should correctly call construtor with arguments', () => {
    expect(reusableCalculator).toEqual({userInputAge: 45, race: "caucasian", gender: "female", planets: ["mercury", "venus", "earth", "mars", "jupiter"], agePerPlanet: {}, planetId: -1});
  });

  test('should correctly call method "assignPlanetId()"', () => {
    reusableCalculator.assignPlanetId();
    expect(reusableCalculator.planetId).toEqual(0);
    reusableCalculator.planetId = -1; //set value back to default so as to not impact future tests
  });

  test('should correctly call method "addPlanet()"', () => {
    const planetObjectRec = {agePlanetBased: 187, estLifeExp: 277};
    const planetObjectExp = {mercury: {agePlanetBased: 187, estLifeExp: 277}};
    reusableCalculator.addPlanet( planetObjectRec);
    expect(reusableCalculator.agePerPlanet).toMatchObject(planetObjectExp);
   });

   test('should correctly call method "addAgeOnPlanets()"', () => {
    const agePlanetBasedAdjust = {mercury: 0.24,venus: 0.62, earth: 1.00, mars: 1.88, jupiter: 11.86};
    const raceBasedLifeExpOnEarth = {caucasian: 65, asian: 70, africanAmerican: 65, latino: 4};
    const result = {mercury: { agePlanetBased: 187, estLifeExp: 277 }, venus: { agePlanetBased: 72, estLifeExp: 111 },earth: { agePlanetBased: 45, estLifeExp: 72 }, mars: { agePlanetBased: 23, estLifeExp: 41 }, jupiter: { agePlanetBased: 3, estLifeExp: 12 } };
    reusableCalculator.addAgeOnPlanets(agePlanetBasedAdjust, raceBasedLifeExpOnEarth);
    expect(reusableCalculator.agePerPlanet).toMatchObject(result);
   });


});