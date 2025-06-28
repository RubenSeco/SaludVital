import { Component, inject } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { MenuItem } from '../../../interfaces/dashboard.interface';
import { menuItems } from '../../../data/data-main';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  constructor() {

  }

  dashboardService = inject(DashboardService);
  menuItems: MenuItem[] = menuItems;


}
