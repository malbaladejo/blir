import { Injectable } from '@angular/core';
import { IntervalTime } from './intervalTime';

@Injectable({
    providedIn: 'root'
})
export class IntervalDataService {

    private intervalsKey = 'intervals';
    private intervals = new Array<IntervalTime>();

    constructor() {
        this.ensureIntervals();
    }

    getIntervals(): IntervalTime[] {
        return this.intervals;
    }

    private ensureIntervals() {
        const json = window.localStorage.getItem(this.intervalsKey);
        if (json === null) {
            this.intervals = new Array<IntervalTime>();
        }
        else {
            this.intervals = JSON.parse(json) as IntervalTime[];
        }
    }
}
