import * as moment from "moment";

export class IntervalTime {
    public id = '';
    public startDateTime: Date | null = null;
    public endDateTime: Date | null = null;
}

export class IntervalTimeEx {
    static getElapsedTimeInMinutes(internal: IntervalTime): number {
        const startDateTime = moment(internal.startDateTime);
        const endDateTime = moment(internal.endDateTime ?? new Date());

        const duration = moment.duration(startDateTime.diff(endDateTime));
        return duration.asMinutes();
    }
}