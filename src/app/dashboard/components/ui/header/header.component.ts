import { Component } from '@angular/core';
import { menuItems } from '../../../data/data-main';
import { MenuItem } from '../../../interfaces/main.interface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  menuItems: MenuItem[] = menuItems;
}
