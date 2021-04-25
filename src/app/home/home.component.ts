import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../RoutingModule/routing.service';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { SettingsService } from '../settings/settings.service';
import { DayTimePeriod } from '../services/dayTimePeriod';
import { TimePeriod } from '../services/timePeriod';
import { IntervalService } from '../services/interval.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export
  class HomeVm {
  constructor(public showEllaspsedTime: boolean) {
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlay = faPlay;
  faStop = faStop;

  isRunning = false;

  labels: Label[] = ['fait', 'restant'];
  data: MultiDataSet = [[8, 6.32]];
  colors: Color[] = [{ backgroundColor: ['green', 'lightgray'] }];
  dayTimePeriod: DayTimePeriod;
  weekTimePeriod: TimePeriod;
  monthsTimePeriod: TimePeriod;
  vm$: Observable<HomeVm>;

  constructor(
    public routingService: RoutingService,
    private settingsService: SettingsService,
    intervalService: IntervalService) {
    this.vm$ = this.settingsService.showEllaspsedTime$
      .pipe(map(value => new HomeVm(value)));

    const t = intervalService.getHomeTimePeriods();
    this.dayTimePeriod = t[0] as DayTimePeriod;
    this.weekTimePeriod = t[1];
    this.monthsTimePeriod = t[2];
  }

  ngOnInit(): void {

  }

  toggleRunning(): void {
    this.isRunning = !this.isRunning;
  }
}
