export default class Calculator {
  constructor(userInputAge, race, gender, planets) {
    this.userInputAge = userInputAge;
    this.race = race;
    this.gender = gender;
    this.planets = planets;
    this.agePerPlanet = {};
    this.planetId = -1;
    this.genderBasedLifeExpCorrection;
  }

  assignPlanetId() {
    this.planetId += 1;
    return this.planets[this.planetId];
  }

  addPlanet(planet) { //copied same pattern as address book
    let planetID = this.assignPlanetId();
    this.agePerPlanet[planetID] = planet;
  }

  addAgeOnPlanets(agePlanetBasedAdjust, raceBasedLifeExpOnEarth) { //both arguments are objects
    if (this.gender === "female") {
      this.genderBasedLifeExpCorrection = 7;
    }
    else {
      this.genderBasedLifeExpCorrection = 0;
    }

    this.planets.forEach(planet => {
      const agePlanetBased = (Math.floor(this.userInputAge / agePlanetBasedAdjust[planet]));
      const estLifeExp = (Math.floor(raceBasedLifeExpOnEarth[this.race] / agePlanetBasedAdjust[planet])) + this.genderBasedLifeExpCorrection;
      let planetObject = { agePlanetBased: agePlanetBased, estLifeExp: estLifeExp };
      this.addPlanet(planetObject);
    });
    // return;  //returns "undefined"
  }
}