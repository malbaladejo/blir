import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.scss']
})
export class TimeChartComponent implements OnInit {

  constructor() { }

  labels: Label[] = [];
  data: MultiDataSet = [];
  colors: Color[] = [];
  options: ChartOptions = {
    tooltips: {
      enabled: false
    }
  };

  displayTime = 0;
  operator = '';

  private absoluteTimeDifferenceInMinutes = 0;
  overdue = false;

  private elapsedTimeInMinutesValue = 0;
  private expectedTimeInMinutesValue = 0;
  private showEllaspsedTimeValue = true;

  @Input()
  get elapsedTimeInMinutes(): number {
    return this.elapsedTimeInMinutesValue;
  }

  set elapsedTimeInMinutes(value: number) {
    this.elapsedTimeInMinutesValue = value;
    this.setData();
    this.setDisplayTime();
  }

  @Input()
  get expectedTimeInMinutes(): number {
    return this.expectedTimeInMinutesValue;
  }

  set expectedTimeInMinutes(value: number) {
    this.expectedTimeInMinutesValue = value;
    this.setData();
    this.setDisplayTime();
  }

  @Input()
  get showEllaspsedTime(): boolean {
    return this.showEllaspsedTimeValue;
  }

  set showEllaspsedTime(value: boolean) {
    this.showEllaspsedTimeValue = value;
    this.setDisplayTime();
  }

  ngOnInit(): void {
  }

  private setData(): void {

    if (this.elapsedTimeInMinutes < this.expectedTimeInMinutes) {
      this.overdue = false;
      this.absoluteTimeDifferenceInMinutes = this.expectedTimeInMinutes - this.elapsedTimeInMinutes;
      this.data = [[this.elapsedTimeInMinutes, this.absoluteTimeDifferenceInMinutes]];
      this.colors = [{ backgroundColor: ['green', 'lightgray'] }];
      return;
    }

    this.overdue = true;
    this.absoluteTimeDifferenceInMinutes = this.elapsedTimeInMinutes - this.expectedTimeInMinutes;
    this.data = [[this.absoluteTimeDifferenceInMinutes, this.elapsedTimeInMinutes]];
    this.colors = [{ backgroundColor: ['red', 'green'] }];
  }

  private setDisplayTime(): void {
    if (this.showEllaspsedTime) {
      this.displayTime = this.elapsedTimeInMinutes;
      this.operator = '';
    }
    else {
      this.displayTime = this.absoluteTimeDifferenceInMinutes;
      this.operator = this.overdue ? '+' : '-';
    }
  }
}
