import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constraint } from './model/constraint';
import { DayConstraint } from './model/dayConstraint';
import { PeriodConstraint } from './model/periodConstraint';
import { UserSettings } from './model/userSettings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private userSettingsKey = 'user-seetings';
  private userSettings: UserSettings;

  private showEllaspsedTime: BehaviorSubject<boolean>;
  public showEllaspsedTime$: Observable<boolean>;

  constructor() {
    this.userSettings = this.ensureUserSettings();
    this.showEllaspsedTime = new BehaviorSubject<boolean>(this.userSettings.showEllaspsedTime);
    this.showEllaspsedTime$ = this.showEllaspsedTime.asObservable();
  }

  getUserSettings(): UserSettings {
    return this.userSettings;
  }

  setUserSettings(userSettings: UserSettings): void {
    window.localStorage.setItem(this.userSettingsKey, JSON.stringify(userSettings));
  }

  setShowEllaspsedTime(value: boolean): void {
    this.showEllaspsedTime.next(value);
    this.userSettings.showEllaspsedTime = value;
    this.setUserSettings(this.userSettings);
  }

  private ensureUserSettings(): UserSettings {
    const json = window.localStorage.getItem(this.userSettingsKey);
    if (json != null) {
      return JSON.parse(json);
    }

    return new UserSettings();
  }

  getConstraint(id: string): Constraint {
    return new DayConstraint('DayConstraint-1', 0);
  }

  getConstraints(): Constraint[] {
    return [new DayConstraint('DayConstraint-1', 0, new Date(2020, 4, 26)),
    new PeriodConstraint('PeriodConstraint-1', 0, new Date(2020, 4, 1), new Date(2020, 4, 10))
    ];
  }
}
