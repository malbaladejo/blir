import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { routeSegments } from '../RoutingModule/route-segments';
import { RoutingService } from '../RoutingModule/routing.service';
import { IntervalService } from '../services/interval.service';
import { IntervalTime } from '../services/intervalTime';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  interval$: Observable<IntervalTime>;

  constructor(private intervalService: IntervalService, route: ActivatedRoute, routingService: RoutingService) {
    this.interval$ = route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.intervalService.getInterval(routingService.getEditIntervalIdParam(params))
      )
    );
  }

  ngOnInit(): void {
  }
}
