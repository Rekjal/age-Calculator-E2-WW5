import Calculator from './../src/js/Calculator.js';

describe('Calculator', () => {
  let reusableCalcFemale;
  let reusableCalcMale;

  beforeEach(() => {
    const planets = ["mercury", "venus", "earth", "mars", "jupiter"];
    reusableCalcFemale = new Calculator(45, "caucasian", "female", planets);
    reusableCalcMale = new Calculator(60, "caucasian", "male", planets);
  });

  test('should correctly call construtor with arguments', () => {
    expect(reusableCalcFemale).toEqual({ userInputAge: 45, race: "caucasian", gender: "female", planets: ["mercury", "venus", "earth", "mars", "jupiter"], agePerPlanet: {}, planetId: -1 });
  });

  test('should correctly call construtor with arguments', () => {
    expect(reusableCalcMale).toEqual({ userInputAge: 60, race: "caucasian", gender: "male", planets: ["mercury", "venus", "earth", "mars", "jupiter"], agePerPlanet: {}, planetId: -1 });
  });

  test('should correctly call method "assignPlanetId()"', () => {
    reusableCalcFemale.assignPlanetId();
    expect(reusableCalcFemale.planetId).toEqual(0);
    reusableCalcFemale.planetId = -1; //set value back to default so as to not impact future tests
  });

  test('should correctly call method "addPlanet()"', () => {
    const planetObjectRec = { agePlanetBased: 187, estLifeExp: 277 };
    const planetObjectExp = { mercury: { agePlanetBased: 187, estLifeExp: 277 } };
    reusableCalcFemale.addPlanet(planetObjectRec);
    expect(reusableCalcFemale.agePerPlanet).toMatchObject(planetObjectExp);
  });

  test('should correctly call method "addAgeOnPlanets()"', () => {
    const agePlanetBasedAdjust = { mercury: 0.24, venus: 0.62, earth: 1.00, mars: 1.88, jupiter: 11.86 };
    const raceBasedLifeExpOnEarth = { caucasian: 65, asian: 70, africanAmerican: 65, latino: 4 };
    const result = { mercury: { agePlanetBased: 187, estLifeExp: 277 }, venus: { agePlanetBased: 72, estLifeExp: 111 }, earth: { agePlanetBased: 45, estLifeExp: 72 }, mars: { agePlanetBased: 23, estLifeExp: 41 }, jupiter: { agePlanetBased: 3, estLifeExp: 12 } };
    reusableCalcFemale.addAgeOnPlanets(agePlanetBasedAdjust, raceBasedLifeExpOnEarth);
    expect(reusableCalcFemale.agePerPlanet).toMatchObject(result);
  });

  test('should correctly call method "addAgeOnPlanets()"', () => {
    const agePlanetBasedAdjust = { mercury: 0.24, venus: 0.62, earth: 1.00, mars: 1.88, jupiter: 11.86 };
    const raceBasedLifeExpOnEarth = { caucasian: 65, asian: 70, africanAmerican: 65, latino: 4 };
    const result = { mercury: { agePlanetBased: 250, estLifeExp: 270 }, venus: { agePlanetBased: 96, estLifeExp: 104 }, earth: { agePlanetBased: 60, estLifeExp: 65 }, mars: { agePlanetBased: 31, estLifeExp: 34 }, jupiter: { agePlanetBased: 5, estLifeExp: 5 } };
    reusableCalcMale.addAgeOnPlanets(agePlanetBasedAdjust, raceBasedLifeExpOnEarth);
    expect(reusableCalcMale.agePerPlanet).toMatchObject(result);
  });

});