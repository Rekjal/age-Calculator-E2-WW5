export default class Calculator {
  constructor (ageOnMercury, ageOnVenus, ageOnEarth, ageOnMars, ageOnJupiter) {
    this.ageOnMercury = ageOnMercury;
    this.ageOnVenus = ageOnVenus;
    this.ageOnEarth = ageOnEarth;
    this.ageOnMars = ageOnMars;
    this.ageOnJupiter = ageOnJupiter;
    this.demoELECorrection = {
      caucasian: 1.10,
      asian: 1.15,
      africanAmerican: 0.90,
      latino: 0.95
    };
    this.estimatedLifeExp = 65;
  }

  ageOnPlanets(userInputAge, planetsConvFactor) {
    this.ageOnMercury = (Math.floor(userInputAge / planetsConvFactor[0]));
    this.ageOnVenus = (Math.floor(userInputAge / planetsConvFactor[1]));
    this.ageOnEarth = (Math.floor(userInputAge / planetsConvFactor[2]));
    this.ageOnMars = (Math.floor(userInputAge / planetsConvFactor[3]));
    this.ageOnJupiter = (Math.floor(userInputAge / planetsConvFactor[4]));
    return;
  }

  yearsRemaining(){

  }

}