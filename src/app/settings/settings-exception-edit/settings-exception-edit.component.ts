import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RoutingService } from 'src/app/RoutingModule/routing.service';
import { DurationValue } from '../durationValue';
import { Constraint, DefaultConstraint } from '../model/constraint';
import { contraintType } from '../model/contraintType';
import { DayConstraint } from '../model/dayConstraint';
import { PeriodConstraint } from '../model/periodConstraint';
import { SettingsService } from '../settings.service';
import { ConstraintViewModel } from '../weekDayConstraintViewModel';

@Component({
  selector: 'app-settings-exception-edit',
  templateUrl: './settings-exception-edit.component.html',
  styleUrls: ['./settings-exception-edit.component.scss']
})
export class SettingsExceptionEditComponent implements OnInit, OnDestroy {

  constraint$: Observable<Constraint>;
  contraintType = contraintType;
  hours = new Array<DurationValue>();
  minutes = new Array<DurationValue>();
  constraintVM: ConstraintViewModel;

  private constraintSubscription: Subscription;

  constructor(
    settingsService: SettingsService,
    route: ActivatedRoute,
    public routingService: RoutingService) {
    this.constraint$ = route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(settingsService.getConstraint(routingService.getSettingsExceptionsEditId(params)))
      )
    );
    this.constraintVM = new ConstraintViewModel(new DefaultConstraint());

    this.constraintSubscription = this.constraint$.subscribe(c => this.constraintVM = new ConstraintViewModel(c));
  }
  ngOnDestroy(): void {
    this.constraintSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initializecomboBox();
  }

  asDayConstraint(value: Constraint): DayConstraint {
    return value as DayConstraint;
  }

  private initializecomboBox(): void {
    for (let i = 0; i < 24; i++) {
      this.hours.push(new DurationValue(i));
    }

    for (let i = 0; i < 60; i++) {
      this.minutes.push(new DurationValue(i));
    }
  }

}
