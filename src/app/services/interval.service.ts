import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DayTimePeriod } from './dayTimePeriod';
import { IntervalTime } from './intervalTime';
import { TimePeriod } from './timePeriod';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {

  constructor() { }

  getInterval(id: string): Observable<IntervalTime> {
    return of({
      id: '1',
      startDateTime: new Date(),
      endDateTime: null
    });
  }

  getHomeTimePeriods(): TimePeriod[] {
    const dayTimePeriod: DayTimePeriod = {
      id: '1',
      elapsedTimeInMinutes: 6.4 * 60,
      expectedTimeInMinutes: 8 * 60
    };

    const weekTimePeriod: TimePeriod = {
      elapsedTimeInMinutes: (4.2 * 60) + (8 * 60 * 5),
      expectedTimeInMinutes: 8 * 60 * 5
    };

    const monthsTimePeriod: TimePeriod = {
      elapsedTimeInMinutes: 8 * 60 * 5 * 8 * 4,
      expectedTimeInMinutes: 8 * 60 * 5 * 8
    };

    return [dayTimePeriod, weekTimePeriod, monthsTimePeriod];
  }
}
