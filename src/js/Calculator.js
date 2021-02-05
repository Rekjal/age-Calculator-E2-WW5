export default class Calculator {
  constructor (ageOnMercury, ageOnVenus, ageOnEarth, ageOnMars, ageOnJupiter) {
    this.ageOnMercury = ageOnMercury;
    this.ageOnVenus = ageOnVenus;
    this.ageOnEarth = ageOnEarth;
    this.ageOnMars = ageOnMars;
    this.ageOnJupiter = ageOnJupiter;
  }

  ageOnPlanets(userInputAge, planetsConvFactor) {
    let ageOnMercury = (Math.floor(userInputAge / planetsConvFactor[0]));
    let ageOnVenus = (Math.floor(userInputAge / planetsConvFactor[1]));
    let ageOnEarth = (Math.floor(userInputAge / planetsConvFactor[2]));
    let ageOnMars = (Math.floor(userInputAge / planetsConvFactor[3]));
    let ageOnJupiter = (Math.floor(userInputAge / planetsConvFactor[4]));
    let planetAgeArray = [];
    planetAgeArray.push(ageOnMercury, ageOnVenus, ageOnEarth, ageOnMars, ageOnJupiter);
    return planetAgeArray;
  }
  
}