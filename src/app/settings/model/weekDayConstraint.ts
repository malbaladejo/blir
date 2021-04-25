import { WeekDay } from '@angular/common';
import { Constraint } from './constraint';
import { contraintType } from './contraintType';

export class WeekDayConstraint extends Constraint {
    type = contraintType.weekDay;
    constructor(public weekDay: WeekDay, numberOfMinutes: number = 0) {
        super('WeekDay-' + weekDay, numberOfMinutes);
    }

    static cast(value: Constraint): WeekDayConstraint {
        return value as WeekDayConstraint;
    }
}
