import { Component } from '@angular/core';
import { HeaderComponent } from "./ui/header/header.component";
import { MainComponent } from "./ui/main/main.component";
import { FooterComponent } from "./ui/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent { }
