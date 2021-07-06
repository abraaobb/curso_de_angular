import {Spacecraft, Containership} from './base-ships';
import {MillenniumFalcon} from './star-fighters';


let ship = new Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainer > 2;
console.log(
    `Is falcon good for the job? ${goodForTheJob(falcon) ? "yes" : "no"}`
);
