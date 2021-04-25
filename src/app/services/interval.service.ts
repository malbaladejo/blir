import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of, throwError } from 'rxjs';
import { DayTimePeriod } from './dayTimePeriod';
import { HomeTimePeriods } from './homeTimePeriods';
import { IntervalDataService } from './intervalData.service';
import { IntervalTime, IntervalTimeEx } from './intervalTime';
import { TimePeriod } from './timePeriod';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {

  private intervals = new Array<IntervalTime>();

  constructor(private intervalDataService: IntervalDataService) {
    this.ensureIntervals();
  }

  getInterval(id: string): Observable<IntervalTime> {
    const interval = this.intervals.find(i => i.id === id);

    if (interval !== null) {
      return of(<IntervalTime>interval);
    }
    else {
      return throwError(`Interval {id} is not found.`);
    }
  }

  getHomeTimePeriods(): HomeTimePeriods {
    return {
      currentDay: this.getCurrentDayTimePeriod(),
      currentWeek: this.getCurrentWeekTimePeriod(),
      lastTwoMonths: this.getLastTwoMonthsPeriod()
    };
  }

  private getCurrentDayTimePeriod(): DayTimePeriod {
    const today = moment().startOf('day');
    const elapsedTimeInMinutes = this.getElapsedTimeInMinutes(today);

    return {
      elapsedTimeInMinutes: elapsedTimeInMinutes,
      expectedTimeInMinutes: 0,// TODO
      id: ''//TODO
    };
  }

  private getCurrentWeekTimePeriod(): TimePeriod {
    const today = moment().startOf('week');
    const elapsedTimeInMinutes = this.getElapsedTimeInMinutes(today);

    return {
      elapsedTimeInMinutes: elapsedTimeInMinutes,
      expectedTimeInMinutes: 0// TODO
    };
  }

  private getLastTwoMonthsPeriod(): TimePeriod {
    const today = moment().add(-60, 'day');
    const elapsedTimeInMinutes = this.getElapsedTimeInMinutes(today);

    return {
      elapsedTimeInMinutes: elapsedTimeInMinutes,
      expectedTimeInMinutes: 0// TODO
    };
  }

  private getElapsedTimeInMinutes(startDate: moment.Moment): number {
    const today = moment(startDate);
    const tomorrow = moment().add(1, 'd');

    return this.intervals.filter(i => today.isBefore(i.startDateTime) && tomorrow.isAfter(i.startDateTime))
      .map(i => IntervalTimeEx.getElapsedTimeInMinutes(i))
      .reduce((a, b) => a + b, 0);
  }

  private ensureIntervals() {
    this.intervals = this.intervalDataService.getIntervals();
  }
}
