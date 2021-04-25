import { Constraint } from './constraint';
import { contraintType } from './contraintType';

export class DayConstraint extends Constraint {
    type = contraintType.day;
    constructor(public id: string, public numberOfMinutes: number, public date: Date | null = null) {
        super(id, numberOfMinutes ?? 0);
    }
}
