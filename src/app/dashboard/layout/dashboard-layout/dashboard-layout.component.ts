import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/ui/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent { }
