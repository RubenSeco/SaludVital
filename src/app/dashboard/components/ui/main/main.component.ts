import { Component } from '@angular/core';
import { ContactInformation, Doctor, MedicalService, Service } from '../../../interfaces/dashboard.interface';
import { services, medicalServices, doctors, contactInformation } from '../../../data/data-main';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../app.routes';


@Component({
  selector: 'app-main',
  imports: [RouterModule],
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor() {

    RouterModule.forRoot(routes, { anchorScrolling: "enabled" });
  }



  services: Service[] = services;

  medicalServices: MedicalService[] = medicalServices;

  doctors: Doctor[] = doctors;

  contactInformation: ContactInformation[] = contactInformation;
}

