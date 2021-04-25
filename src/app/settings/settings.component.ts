import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../RoutingModule/routing.service';
import { DurationValue } from './durationValue';
import { Constraint } from './model/constraint';
import { contraintType } from './model/contraintType';
import { DayConstraint } from './model/dayConstraint';
import { PeriodConstraint } from './model/periodConstraint';
import { WeekDayConstraint } from './model/weekDayConstraint';
import { SettingsService } from './settings.service';
import { WeekDayConstraintViewModel } from './weekDayConstraintViewModel';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  weekDayConstraints: WeekDayConstraintViewModel[];
  constraints = new Array<Constraint>();
  contraintType = contraintType;

  hours = new Array<DurationValue>();
  minutes = new Array<DurationValue>();

  asDayConstraint(value: Constraint): DayConstraint {
    return value as DayConstraint;
  }

  asPeriodConstraint(value: Constraint): PeriodConstraint {
    return value as PeriodConstraint;
  }

  constructor(public routingService: RoutingService, private settingsService: SettingsService) {
    this.weekDayConstraints = this.settingsService.
      constraints
      .filter(c => c.type === contraintType.weekDay)
      .map(c => new WeekDayConstraintViewModel(c as WeekDayConstraint));
  }

  ngOnInit(): void {
    this.initializecomboBox();
    this.initializeConstraints();
  }

  private initializecomboBox(): void {
    for (let i = 0; i < 24; i++) {
      this.hours.push(new DurationValue(i));
    }

    for (let i = 0; i < 60; i++) {
      this.minutes.push(new DurationValue(i));
    }
  }

  private initializeConstraints(): void {
    this.constraints = this.settingsService.constraints.slice(0, 10);
  }

}
