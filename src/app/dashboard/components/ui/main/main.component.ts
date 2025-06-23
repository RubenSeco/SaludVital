import { Component } from '@angular/core';
import { Doctor, MedicalService, Service } from '../../../interfaces/main.interface';
import { services, medicalServices, doctors } from '../../../data/data-main';


@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor() { }

  services: Service[] = services;

  medicalServices: MedicalService[] = medicalServices;

  doctors: Doctor[] = doctors;
}

