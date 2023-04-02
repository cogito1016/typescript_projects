import { Beverage } from './beverage';

export class Espresso extends Beverage {
  constructor() {
    super();
    this._description = 'expresso';
  }

  cost(): number {
    return 500;
  }
}
