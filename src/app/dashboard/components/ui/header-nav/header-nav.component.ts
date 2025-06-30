import { Component } from '@angular/core';
import { MenuItem } from '../../../interfaces/dashboard.interface';
import { menuItems } from '../../../data/data-main';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  imports: [RouterLink],
  templateUrl: './header-nav.component.html',
})
export class HeaderNavComponent {

  menuItems: MenuItem[] = menuItems;


 }
