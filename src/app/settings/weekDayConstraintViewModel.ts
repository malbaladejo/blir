import { WeekDay } from "@angular/common";
import { WeekDayConstraint } from "./model/weekDayConstraint";

export class WeekDayConstraintViewModel {
    constructor(private weekDayConstraint: WeekDayConstraint) {

    }

    get weekDay(): WeekDay {
        return this.weekDayConstraint.weekDay;
    }

    get hours(): number {
        return this.weekDayConstraint.numberOfMinutes / 60;
    }

    set hours(value: number) {
        this.weekDayConstraint.numberOfMinutes = value * 60 + this.minutes;
    }

    get minutes(): number {
        return this.weekDayConstraint.numberOfMinutes % 60;
    }

    set minutes(value: number) {
        this.weekDayConstraint.numberOfMinutes = this.hours * 60 + value;
    }
}