import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RoutingService } from 'src/app/RoutingModule/routing.service';
import { DurationValue } from '../durationValue';
import { contraintType } from '../model/contraintType';
import { WeekDayConstraint } from '../model/weekDayConstraint';
import { SettingsService } from '../settings.service';
import { WeekDayConstraintViewModel } from '../weekDayConstraintViewModel';

@Component({
  selector: 'app-settings-general-tab',
  templateUrl: './settings-general-tab.component.html',
  styleUrls: ['./settings-general-tab.component.scss']
})
export class SettingsGeneralTabComponent implements OnInit, OnDestroy {
  weekDayConstraints: WeekDayConstraintViewModel[];
  private showEllaspsedTimeValue = true;
  private showEllaspsedTimeValueSubscription: Subscription;

  showEllaspsedTimeLabel = '';
  hours = new Array<DurationValue>();
  minutes = new Array<DurationValue>();

  constructor(public routingService: RoutingService, private settingsService: SettingsService) {
    this.showEllaspsedTimeValueSubscription =
      this.settingsService.showEllaspsedTime$
        .subscribe(v => this.showEllaspsedTime = v);

    this.weekDayConstraints = this.settingsService
      .constraints
      .filter(c => c.type === contraintType.weekDay)
      .map(c => new WeekDayConstraintViewModel(c as WeekDayConstraint));
  }

  ngOnInit(): void {
    this.initializecomboBox();
  }

  ngOnDestroy(): void {
    this.showEllaspsedTimeValueSubscription.unsubscribe();
  }

  get showEllaspsedTime(): boolean {
    return this.showEllaspsedTimeValue;
  }

  set showEllaspsedTime(value: boolean) {
    this.showEllaspsedTimeValue = value;
    this.showEllaspsedTimeLabel =
      this.showEllaspsedTimeValue ?
        'Afficher le temps écoulé' :
        ' Afficher le temps restant';
    this.settingsService.setShowEllaspsedTime(value);
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
