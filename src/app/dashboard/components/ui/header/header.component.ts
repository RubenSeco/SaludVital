import { Component, inject} from '@angular/core';
import { menuItems } from '../../../data/data-main';
import { MenuItem } from '../../../interfaces/dashboard.interface';
import { DashboardService } from '../../../dashboard.service';
import { ModalAppointmentComponent } from "../modal-appointment/modal-appointment.component";

@Component({
  selector: 'app-header',
  imports: [ModalAppointmentComponent],

  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor() {

  }


  menuItems: MenuItem[] = menuItems;

  dashboardService = inject(DashboardService);

  toogleMenu = () => this.dashboardService.toogleMenu();



}
