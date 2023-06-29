/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.evacuationWarningMessage instanceof Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
