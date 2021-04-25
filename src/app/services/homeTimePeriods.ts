import { DayTimePeriod } from "./dayTimePeriod";
import { TimePeriod } from "./timePeriod";

export interface HomeTimePeriods {
    currentDay: DayTimePeriod,
    currentWeek: TimePeriod,
    lastTwoMonths: TimePeriod
}
