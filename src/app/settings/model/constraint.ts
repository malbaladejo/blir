export abstract class Constraint {
  abstract type: string;
  constructor(public id: string, public numberOfMinutes: number) {

  }
}
