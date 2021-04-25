import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingsService } from 'src/app/settings/settings.service';
import { HomeMenuItem, HomeMenuService } from '../homemenu.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnDestroy {
  showEllaspsedTimeLabel = '';
  menuItems: HomeMenuItem[];
  private showEllaspsedTimeValue = true;
  private showEllaspsedTimeSubscription: Subscription;

  constructor(private settingsService: SettingsService, homeMenuService: HomeMenuService) {
    this.showEllaspsedTimeSubscription = this.settingsService.showEllaspsedTime$
      .subscribe(v => this.showEllaspsedTimeValue = v);
    this.menuItems = homeMenuService.getHomeMenuItems();
  }

  @Output()
  toggleDrawerEvent = new EventEmitter<boolean>();

  ngOnDestroy(): void {
    this.showEllaspsedTimeSubscription.unsubscribe();
  }

  get showEllaspsedTime(): boolean {
    return this.showEllaspsedTimeValue;
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
