import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RoutingService } from 'src/app/RoutingModule/routing.service';
import { Constraint } from '../model/constraint';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-exception-edit',
  templateUrl: './settings-exception-edit.component.html',
  styleUrls: ['./settings-exception-edit.component.scss']
})
export class SettingsExceptionEditComponent implements OnInit {

  constraint$: Observable<Constraint>;

  constructor(settingsService: SettingsService, route: ActivatedRoute, routingService: RoutingService) {
    this.constraint$ = route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(settingsService.getConstraint(routingService.getSettingsExceptionsEditId(params)))
      )
    );
  }

  ngOnInit(): void {
  }

}
