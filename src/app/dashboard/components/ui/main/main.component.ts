import { Component } from '@angular/core';
import { ContactInformation, Doctor, MedicalService, Service } from '../../../interfaces/main.interface';
import { services, medicalServices, doctors, contactInformation } from '../../../data/data-main';


@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor() {}

  services: Service[] = services;

  medicalServices: MedicalService[] = medicalServices;

  doctors: Doctor[] = doctors;

  contactInformation: ContactInformation[] = contactInformation;
}

