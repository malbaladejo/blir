import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Constraint } from './model/constraint';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private userSettingsShowEllaspsedTimeKey = 'user-seetings-showEllaspsedTime';
  private userSettingsConstraintsTimeKey = 'user-seetings-constraints';

  private showEllaspsedTime = new BehaviorSubject<boolean>(true);
  private constraintList = new Array<Constraint>();

  constructor() {
    this.showEllaspsedTime$ = this.showEllaspsedTime.asObservable();

    this.ensureUserSettings();
  }

  /*showEllaspsedTime*/
  showEllaspsedTime$: Observable<boolean>;

  setShowEllaspsedTime(value: boolean): void {
    if (this.showEllaspsedTime.value === value) {
      return;
    }

    this.showEllaspsedTime.next(value);
    this.saveShowEllaspsedTime(value);
  }

  /*getConstraint*/
  getConstraint(id: string): Constraint {
    const constraint = this.constraints.find(c => c.id === id) as Constraint;

    if (constraint == null) {
      throw (new Error('Unknown constraint ' + id));
    }

    return constraint;
  }

  /* constraints*/
  get constraints(): Constraint[] {
    return this.constraintList;
  }

  set constraints(constraints: Constraint[]) {
    this.constraintList = constraints;
    this.saveConstraints(constraints);
  }

  /* ensure data*/
  private ensureUserSettings(): void {
    this.showEllaspsedTime.next(this.loadShowEllaspsedTimes());
    this.constraintList = this.loadConstraints();
  }

  protected loadShowEllaspsedTimes(): boolean {
    const json = window.localStorage.getItem(this.userSettingsShowEllaspsedTimeKey);
    if (json === null) {
      return true;
    }
    return json === 'true';
  }

  protected loadConstraints(): Constraint[] {
    const json = window.localStorage.getItem(this.userSettingsConstraintsTimeKey);
    if (json === null) {
      return new Array<Constraint>();
    }

    const constraints = JSON.parse(json) as Constraint[];
    if (constraints !== null) {
      return constraints;
    }

    return new Array<Constraint>();
  }

  /*save data*/
  protected saveShowEllaspsedTime(value: boolean): void {
    window.localStorage.setItem(this.userSettingsShowEllaspsedTimeKey, value.toString());
  }

  protected saveConstraints(constraints: Constraint[]): void {
    window.localStorage.setItem(this.userSettingsConstraintsTimeKey, JSON.stringify(constraints));
  }
}
