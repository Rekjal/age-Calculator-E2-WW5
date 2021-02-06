export default class Calculator {
  constructor(userInputAge, race, gender, planets) {
    this.userInputAge = userInputAge;
    this.race = race;
    this.gender = gender;
    this.planets = planets;
    this.agePerPlanet = {};
    this.planetId = -1;
  }

  assignPlanetId() {
    this.planetId += 1;
    return this.planets[this.planetId];
  }
}