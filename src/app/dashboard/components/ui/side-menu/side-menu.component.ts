import { Component, inject } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { MenuItem } from '../../../interfaces/dashboard.interface';
import { menuItems } from '../../../data/data-main';
import { HeaderNavComponent } from "../header-nav/header-nav.component";

@Component({
  selector: 'app-side-menu',
  imports: [ HeaderNavComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  constructor() {

  }

  dashboardService = inject(DashboardService);
  menuItems: MenuItem[] = menuItems;



}
