import { contraintType } from './contraintType';
import { DayConstraint } from './dayConstraint';

export class PeriodConstraint extends DayConstraint {
    type = contraintType.period;

    constructor(
        id: string,
        numberOfMinutes: number | null = null,
        startDate: Date | null = null,
        endDate: Date | null = null) {
        super(id, numberOfMinutes ?? 0, startDate);
        this.endDate = endDate;
    }
}
