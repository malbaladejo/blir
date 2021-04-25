import { Component, OnInit } from '@angular/core';
import { HomeMenuService, HomeMenuItem } from '../homemenu.service';

@Component({
  selector: 'app-homesidebar',
  templateUrl: './homesidebar.component.html',
  styleUrls: ['./homesidebar.component.scss']
})
export class HomesidebarComponent {

  menuItems: HomeMenuItem[];

  constructor(homeMenuService: HomeMenuService) {
    this.menuItems = homeMenuService.getHomeMenuItems();
  }

}
