import { Routes } from '@angular/router';


export const routes: Routes = [
  // Public routes

  // Private routes
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.routes'),
  },
];
