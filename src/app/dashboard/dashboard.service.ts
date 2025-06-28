import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() {

  }

  isMenuOpen = signal(false);

  toogleMenu() {
    this.isMenuOpen() ? this.isMenuOpen.set(false) : this.isMenuOpen.set(true);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

}
