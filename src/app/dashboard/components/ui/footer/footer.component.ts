import { Component } from '@angular/core';
import { menuItems, medicalServices, contactInformation } from '../../../data/data-main';
import { ContactInformation, MedicalService, MenuItem } from '../../../interfaces/main.interface';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  menuItems: MenuItem[] = menuItems;
  medicalServices: MedicalService[] = medicalServices;
  contactInformation: ContactInformation[] = contactInformation;
}
