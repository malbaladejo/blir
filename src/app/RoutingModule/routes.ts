import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { IntervalComponent } from '../interval/interval.component';
import { SettingsExceptionEditComponent } from '../settings/settings-exception-edit/settings-exception-edit.component';
import { SettingsExceptionComponent } from '../settings/settings-exception/settings-exception.component';
import { SettingsComponent } from '../settings/settings.component';
import { routeSegments } from './route-segments';

export const routes: Routes = [
    /* home */
    { path: routeSegments.home, component: HomeComponent },
    /* interval */
    { path: routeSegments.interval.path, component: IntervalComponent },
    { path: routeSegments.interval.path + '/:' + routeSegments.interval.args.id, component: IntervalComponent },
    /* settings */
    { path: routeSegments.settings.path, component: SettingsComponent },
    { path: routeSegments.settings.exceptions.path, component: SettingsExceptionComponent },
    { path: routeSegments.settings.exceptions.edit.path, component: SettingsExceptionEditComponent },
    { path: routeSegments.settings.exceptions.edit.path + '/:' + routeSegments.settings.exceptions.edit.args.id, component: SettingsExceptionEditComponent },
    /* about */
    { path: routeSegments.about, component: AboutComponent }
];

