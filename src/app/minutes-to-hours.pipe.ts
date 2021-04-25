import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const durationInMinutes = value as number;
    if (this.moreThan100Hours(durationInMinutes)) {
      return Math.round(durationInMinutes / 60) + 'h';
    }

    return this.getHoursLabel(durationInMinutes) + ':' + this.getMinutesLabel(durationInMinutes);
  }

  private moreThan100Hours(durationInMinutes: number): boolean {
    return durationInMinutes / 60 > 100;
  }

  private getHoursLabel(durationInMinutes: number): string {
    return this.padLabel(Math.floor(durationInMinutes / 60));
  }

  private getMinutesLabel(durationInMinutes: number): string {
    return this.padLabel(durationInMinutes % 60);
  }

  private padLabel(duration: number): string {
    if (duration < 10) {
      return '0' + duration;
    }

    return '' + duration;
  }

}
