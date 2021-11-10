import {Spacecraft2, Containership2} from './base-ships';
import {MilleniumFalcon2} from './starfighters';

let ship = new Spacecraft2('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MilleniumFalcon2()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership2) => ship.cargoContainers > 2;

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)}`)