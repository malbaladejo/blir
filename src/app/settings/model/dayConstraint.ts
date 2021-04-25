import { Constraint } from './constraint';
import { contraintType } from './contraintType';

export class DayConstraint extends Constraint {
    type = contraintType.day;
    endDate: Date | null = null
    constructor(
        id: string,
        numberOfMinutes: number | null = null,
        public startDate: Date | null = null) {
        super(id, numberOfMinutes ?? 0);
        this.endDate = startDate;
    }
}
