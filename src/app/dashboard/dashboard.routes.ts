import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard-layout/dashboard-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";


export const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardLayoutComponent,
    children: [
      { path: "", component: HomePageComponent },
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }

];

export default dashboardRoutes;
