/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    }
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      this._name = name;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
