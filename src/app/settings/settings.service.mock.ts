import { WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { Constraint } from './model/constraint';
import { DayConstraint } from './model/dayConstraint';
import { PeriodConstraint } from './model/periodConstraint';
import { WeekDayConstraint } from './model/weekDayConstraint';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsServiceMock extends SettingsService {

  constructor() {
    super();
  }

  protected loadShowEllaspsedTimes(): boolean {
    return true;
  }

  protected loadConstraints(): Constraint[] {
    const results = [
      new WeekDayConstraint(WeekDay.Monday, 480),
      new WeekDayConstraint(WeekDay.Tuesday, 480),
      new WeekDayConstraint(WeekDay.Wednesday, 480),
      new WeekDayConstraint(WeekDay.Thursday, 480),
      new WeekDayConstraint(WeekDay.Friday, 480),
      new WeekDayConstraint(WeekDay.Saturday),
      new WeekDayConstraint(WeekDay.Sunday),
      new DayConstraint('DayConstraint-1', 0, new Date(2020, 4, 26)),
      new PeriodConstraint('PeriodConstraint-1', 0, new Date(2020, 4, 1), new Date(2020, 4, 10))
    ];

    for (let i = 0; i < 20; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      results.push(new DayConstraint(`DayConstraint-{i}`, 60, date));
    }

    for (let i = 0; i < 20; i++) {
      const date = new Date();
      const startDate = new Date();
      startDate.setDate(date.getDate() + i);
      const endDate = new Date();
      startDate.setDate(date.getDate() + i + 2);

      results.push(new PeriodConstraint(`PeriodConstraint-{i}`, 240, startDate, endDate));
    }
    return results;
  }
}
