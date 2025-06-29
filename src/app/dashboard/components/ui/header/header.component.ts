import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { menuItems } from '../../../data/data-main';
import { MenuItem } from '../../../interfaces/dashboard.interface';
import { DashboardService } from '../../../dashboard.service';
import { ModalAppointmentComponent } from "../modal-appointment/modal-appointment.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ModalAppointmentComponent],

  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) {

  }

  menuItems: MenuItem[] = menuItems;

  dashboardService = inject(DashboardService);

  toogleMenu = () => this.dashboardService.toogleMenu();

  closeMenu = () => this.dashboardService.closeMenu();


  @HostListener('document:click', ['$event'])
  public onClick(event: any) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      //  Lógica a ejecutar cuando se hace clic fuera del contenido.

      if (this.dashboardService.isMenuOpen()) {
        this.closeMenu();
      }
    }
  }





}
