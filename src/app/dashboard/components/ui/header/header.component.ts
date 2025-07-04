import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ModalAppointmentComponent } from "../modal-appointment/modal-appointment.component";
import { HeaderNavComponent } from "../header-nav/header-nav.component";

@Component({
  selector: 'app-header',
  imports: [ModalAppointmentComponent, HeaderNavComponent],

  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) {

  }


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
