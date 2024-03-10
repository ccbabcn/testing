import { Money } from "./money";

export class FakeMoney extends Money {
  constructor(value: number | string) {
    super(value);
  }

  reduceBy(p: number): Money {
    return new Money(p);
  }

  moreThan(other: Money): boolean {
    return this.value > other.value;
  }
}
