import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard.component";


export const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

export default dashboardRoutes;
