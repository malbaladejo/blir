import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './RoutingModule/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { TimeChartComponent } from './time-chart/time-chart.component';
import { MinutesToHoursPipe } from './minutes-to-hours.pipe';
import { IntervalService } from './services/interval.service';
import { SettingsService } from './settings/settings.service';
import { FormsModule } from '@angular/forms';
import { HomeheaderComponent } from './home/homeheader/homeheader.component';
import { HomesidebarComponent } from './home/homesidebar/homesidebar.component';
import { HomeMenuService } from './home/homemenu.service';
import { WeekDayLabelPipe } from './week-day-label.pipe';
import { SettingsExceptionEditComponent } from './settings/settings-exception-edit/settings-exception-edit.component';
import { SettingsExceptionComponent } from './settings/settings-exception/settings-exception.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntervalComponent,
    SettingsComponent,
    AboutComponent,
    TimeChartComponent,
    MinutesToHoursPipe,
    HomeheaderComponent,
    HomesidebarComponent,
    WeekDayLabelPipe,
    SettingsExceptionEditComponent,
    SettingsExceptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ChartsModule,
    FormsModule
  ],
  providers: [IntervalService, SettingsService, HomeMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
