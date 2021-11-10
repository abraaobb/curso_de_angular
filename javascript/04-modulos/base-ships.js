"use strict";
exports.__esModule = true;
exports.Spacecraft2 = void 0;
var Spacecraft2 = /** @class */ (function () {
    function Spacecraft2(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft2.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft2;
}());
exports.Spacecraft2 = Spacecraft2;
