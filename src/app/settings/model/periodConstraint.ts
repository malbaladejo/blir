import { Constraint } from "./constraint";
import { contraintType } from "./contraintType";

export class PeriodConstraint extends Constraint {
    type = contraintType.period;

    constructor(
        public id: string,
        public numberOfMinutes: number,
        public startDate: Date | null = null,
        public endDate: Date | null = null) {
        super(id, numberOfMinutes ?? 0);
    }
}
