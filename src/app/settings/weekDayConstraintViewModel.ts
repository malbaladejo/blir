import { WeekDay } from '@angular/common';
import { Constraint } from './model/constraint';
import { WeekDayConstraint } from './model/weekDayConstraint';

export class ConstraintViewModel {
    constructor(private constraint: Constraint) {

    }

    get hours(): number {
        return this.constraint.numberOfMinutes / 60;
    }

    set hours(value: number) {
        this.constraint.numberOfMinutes = value * 60 + this.minutes;
    }

    get minutes(): number {
        return this.constraint.numberOfMinutes % 60;
    }

    set minutes(value: number) {
        this.constraint.numberOfMinutes = this.hours * 60 + value;
    }
}

export class WeekDayConstraintViewModel extends ConstraintViewModel {
    constructor(private weekDayConstraint: WeekDayConstraint) {
        super(weekDayConstraint);
    }

    get weekDay(): WeekDay {
        return this.weekDayConstraint.weekDay;
    }
}
