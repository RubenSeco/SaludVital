import { Component } from '@angular/core';
import { HeaderComponent } from "./ui/header/header.component";
import { MainComponent } from "./ui/main/main.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent { }
