import { WeekDay } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDayLabel'
})
export class WeekDayLabelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const weekDay = value as WeekDay;

    switch (weekDay) {
      case WeekDay.Monday:
        return 'lundi';
      case WeekDay.Tuesday:
        return 'mardi';
      case WeekDay.Wednesday:
        return 'mercredi';
      case WeekDay.Thursday:
        return 'jeudi';
      case WeekDay.Friday:
        return 'vendredi';
      case WeekDay.Saturday:
        return 'samedi';
      case WeekDay.Sunday:
        return 'dimanche';
    }
  }

}
