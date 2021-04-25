import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserSettings } from 'src/app/settings/model/userSettings';
import { SettingsService } from 'src/app/settings/settings.service';
import { HomeMenuItem, HomeMenuService } from '../homemenu.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent {
  showEllaspsedTimeLabel = '';
  menuItems: HomeMenuItem[];
  private userSettings: UserSettings;

  constructor(private settingsService: SettingsService, homeMenuService: HomeMenuService) {
    this.userSettings = this.settingsService.getUserSettings();
    this.menuItems = homeMenuService.getHomeMenuItems();
  }

  @Output()
  toggleDrawerEvent = new EventEmitter<boolean>();

  get showEllaspsedTime(): boolean {
    return this.userSettings.showEllaspsedTime;
  }

  set showEllaspsedTime(value: boolean) {
    this.settingsService.setShowEllaspsedTime(value);
    this.setShowEllaspsedTimeLabel();
  }

  private setShowEllaspsedTimeLabel(): void {
    this.showEllaspsedTimeLabel = this.showEllaspsedTime ? 'Temps écoulé' : 'Temps restant';
  }

  toggleDrawer(): void {
    this.toggleDrawerEvent.emit(true);
  }
}
