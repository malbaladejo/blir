export abstract class Constraint {
  abstract type: string;
  numberOfMinutes: number
  constructor(public id: string, numberOfMinutes: number | null = null) {
    this.numberOfMinutes = numberOfMinutes ?? 0;
  }

}

export class DefaultConstraint extends Constraint {
  type = 'default';
  constructor() {
    super('default', 0);
  }
}
