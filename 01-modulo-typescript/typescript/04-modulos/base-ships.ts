class Spacecraft2 {

    constructor(public propulsor: string) { }

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

interface Containership2 {

    cargoContainers: number;

}

export {Spacecraft2, Containership2}