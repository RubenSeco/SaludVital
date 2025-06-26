import { Component, inject } from '@angular/core';
import { MainComponent } from "../../components/ui/main/main.component";
import { FooterComponent } from "../../components/ui/footer/footer.component";
import { SideMenuComponent } from "../../components/ui/side-menu/side-menu.component";
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-home-page',
  imports: [MainComponent, FooterComponent, SideMenuComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor() {

  }

  dashboardService = inject(DashboardService);
  isMenuOpen = this.dashboardService.isMenuOpen;


}



