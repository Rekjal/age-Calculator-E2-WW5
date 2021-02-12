
# Super Galactic Age Calculator

##### Date: **02/06/2021**

#### By **_Salim Mayan_**

## Description

##### A web application that will take a person’s _Age_ in years, _Gender_, and _Race_ and return various attributes of Age relative to other planets. A TDD spec was committed _before_ writing associated methods thus ensuring adherence to the _Red, Green, Refactor_ workflow.  At least one test was created for each spec and no test had more than one expectation. Application returns the following ...


- Age in `Mercury years`


- Age in `Venus years`


- Age in `Mars years`


- Age in `Jupiter years`


- How many `years a user has left to live` on each planet (including `Earth`). This is calculated based on user’s estimated `Life Expectancy` which in turn is calculated based on two pieces of information collected from user (`Gender`, and `Race`). This spawns 3 cases ..

- If user has already surpassed the estimated `Life Expectancy`, return the number of `years user has lived past` the estimated `Life Expectancy`.

- If user hasn't surpassed the estimated `Life Expectancy`, return the number of years `left to live`

- If user's `current age` is `exactly equal` to estimated` Life Expectancy`, gently inform on `impending death`

- Image below shows whats displayed on UI for 3 differnt age Selections.
() (.\src\assets\images\PrintScreenShots.png) 

## Description

#### Further Exploration

##### Added additional features:

- Added UI

- Included a `Refresh` option should the user wish to restart

| **Spec** |

```
Describe: Calculator.prototype.planetId()

Test: "It should return the "planetId" property incremented by 1 with each call"

Expect(Calculator.planetId.toEqual(0);

Describe: Calculator.prototype.addPlanet(agePlanetBased: 187, estLifeExp: 277 })

Test: "It should append a single object to "agePerPlanet()" property with each call"

Expect(Calculator.agePerPlanet.toEqual({ mercury: { agePlanetBased: 187, estLifeExp: 277 } });

Describe: Calculator.prototype.addAgeOnPlanets({ mercury: 0.24, venus: 0.62, earth: 1.00, mars: 1.88, jupiter: 11.86 }, { caucasian: 65, asian: 70, africanAmerican: 65, latino: 4 })

Test: "It should correctly call method "addAgeOnPlanets()" and return an object with schema shown below (calls "addPlanet()" method equal lenght of planet array"

Expect(Calculator.agePerPlanet).toEqual({ mercury: { agePlanetBased: 187, estLifeExp: 277 }, venus: { agePlanetBased: 72, estLifeExp: 111 }, earth: { agePlanetBased: 45, estLifeExp: 72 }, mars: { agePlanetBased: 23, estLifeExp: 41 }, jupiter: { agePlanetBased: 3, estLifeExp: 12 } });

```
## Running tests from terminal using Jest and webpack

-   Ensure sure you have Jest installed, else use  [this link](https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-jest)  to install it on your machine 
-   From main directory run  `$ npm run test`  to check if tests from  `__tests__`  directory pass or fail.
-   _(Note: this project has 100% line coverage for business logic with Jest)_

## Setup/Installation Requirements

1. Clone this repository.
2. To download node modules, run `npm install`
3. To do a build and run application on a dev server, run 	`npm run start`

## Known Bugs


* No known bugs at this time.

## Technologies Used

* HTML

* CSS

* Bootstrap

* JS

* JQuery

* Jest

* Webpack

* Node

* npm
* Markdown


## Support and contact details


_Email no one with any questions, comments, or concerns._


### License


*{This software is licensed under the MIT license}*


Copyright (c) 2021 **_{Salim Mayan}_**