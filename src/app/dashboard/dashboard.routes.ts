import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard-layout/dashboard-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { MainComponent } from "./components/ui/main/main.component";


export const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardLayoutComponent,
    children: [
      { path: "", component: HomePageComponent },
      { path: "main", component: MainComponent, data: { fragment: "medical-services" } },
      { path: "main", component: MainComponent, data: { fragment: "doctors" } },
      { path: "main", component: MainComponent, data: { fragment: "contact" } },
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }

];

export default dashboardRoutes;
