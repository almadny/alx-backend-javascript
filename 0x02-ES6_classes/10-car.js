/* eslint-disable */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const hasSpecies = this.constructor[Symbol.species];
    const cloneObject = hasSpecies ? new this.constructor[Symbol.species]() : new this.constructor.__proto__();
    return cloneObject;
  }
}
