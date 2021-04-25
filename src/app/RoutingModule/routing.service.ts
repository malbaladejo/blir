import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router';
import { routeSegments } from './route-segments';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  homeRoute(): string {
    return routeSegments.home;
  }

  settingsRoute(): string {
    return routeSegments.settings.path;
  }

  settingsExceptionsRoute(): string {
    return '/' + routeSegments.settings.exceptions.path;
  }

  settingsExceptionsEditRoute(id: string): string {
    return '/' + routeSegments.settings.exceptions.edit.path + '/' + id;
  }

  newSettingsExceptionsRoute(): string {
    return '/' + routeSegments.settings.exceptions.edit.path;
  }

  getSettingsExceptionsEditId(params: ParamMap): string {
    return params.get(routeSegments.settings.exceptions.edit.args.id) as string;
  }

  aboutRoute(): string {
    return routeSegments.about;
  }

  newIntervalRoute(): string {
    return routeSegments.interval.path;
  }

  editIntervalRoute(id: string): string {
    return routeSegments.interval.path + '/' + id;
  }

  getEditIntervalIdParam(params: ParamMap): string {
    return params.get(routeSegments.interval.args.id) as string;
  }
}
