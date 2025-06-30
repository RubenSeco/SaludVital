import { Component } from '@angular/core';
import { ContactInformation } from '../../../interfaces/dashboard.interface';
import { contactInformation } from '../../../data/data-main';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {


  contactInformation: ContactInformation[] = contactInformation;
}
