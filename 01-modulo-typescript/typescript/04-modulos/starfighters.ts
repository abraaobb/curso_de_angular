import {Spacecraft2, Containership2} from './base-ships';

class MilleniumFalcon2 extends Spacecraft2 implements Containership2 {

    cargoContainers: number

    constructor() {
        super('hyperdrive');
        this.cargoContainers = 4;
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Failed to jump into huperspace');
        }
    }

}

export {MilleniumFalcon2}