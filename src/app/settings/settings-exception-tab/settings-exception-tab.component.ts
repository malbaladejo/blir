import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RoutingService } from 'src/app/RoutingModule/routing.service';
import { Constraint } from '../model/constraint';
import { contraintType } from '../model/contraintType';
import { DayConstraint } from '../model/dayConstraint';
import { PeriodConstraint } from '../model/periodConstraint';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-exception-tab',
  templateUrl: './settings-exception-tab.component.html',
  styleUrls: ['./settings-exception-tab.component.scss']
})
export class SettingsExceptionTabComponent implements OnInit, AfterViewInit {

  constraints = new Array<Constraint>();
  contraintType = contraintType;

  columnsToDisplay = ['type', 'date', 'duration', 'action'];
  dataSource = new MatTableDataSource<Constraint>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(public routingService: RoutingService, private settingsService: SettingsService) {

  }

  ngOnInit(): void {
    this.constraints = this.settingsService.constraints
      .filter(c => c.type !== contraintType.weekDay);

    this.dataSource = new MatTableDataSource<Constraint>(this.constraints);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  asDayConstraint(value: Constraint): DayConstraint {
    return value as DayConstraint;
  }

}
