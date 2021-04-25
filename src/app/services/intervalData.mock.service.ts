import { Injectable } from '@angular/core';
import { IntervalDataService } from './intervalData.service';
import { IntervalTime } from './intervalTime';

@Injectable({
  providedIn: 'root'
})
export class IntervalDataServiceMock extends IntervalDataService {

  constructor() {
    super();
  }

  getIntervals(): IntervalTime[] {
    return new Array<IntervalTime>();
  }
}
