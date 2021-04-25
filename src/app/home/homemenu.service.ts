import { Injectable } from '@angular/core';
import { RoutingService } from '../RoutingModule/routing.service';

export
  interface HomeMenuItem {
  icon: string;
  label: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeMenuService {

  constructor(private routingService: RoutingService) { }

  getHomeMenuItems(): HomeMenuItem[] {
    return [{
      icon: 'settings_applications',
      label: 'Configuration',
      route: this.routingService.settingsRoute()
    }, {
      icon: 'help_outline',
      label: 'A popos',
      route: this.routingService.aboutRoute()
    }];
  }
}
