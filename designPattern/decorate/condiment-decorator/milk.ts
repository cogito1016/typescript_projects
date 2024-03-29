import { Beverage } from '../beverage/beverage';
import { CondimentDecorator } from './condiment-decorator';

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
  }

  get description(): string {
    return this._beverage.description + '+ milk';
  }

  cost(): number {
    return this._beverage.cost() + 1100;
  }
}
