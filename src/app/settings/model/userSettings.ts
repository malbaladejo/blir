import { WeekDay } from '@angular/common';
import { Constraint } from './constraint';
import { WeekDayConstraint } from './weekDayConstraint';

export class UserSettings {
  version = 1;
  showEllaspsedTime = true;
  constraints = new Array<Constraint>();

  constructor() {
    this.constraints.push(new WeekDayConstraint(WeekDay.Monday, 480));
    this.constraints.push(new WeekDayConstraint(WeekDay.Tuesday, 480));
    this.constraints.push(new WeekDayConstraint(WeekDay.Wednesday, 480));
    this.constraints.push(new WeekDayConstraint(WeekDay.Thursday, 480));
    this.constraints.push(new WeekDayConstraint(WeekDay.Friday, 480));
    this.constraints.push(new WeekDayConstraint(WeekDay.Saturday));
    this.constraints.push(new WeekDayConstraint(WeekDay.Sunday));
  }
}
