import { Component } from '@angular/core';
import { Service } from '../../../interfaces/dashboard.interface';
import { services } from '../../../data/data-main';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../app.routes';
import { MedicalServicesComponent } from "../medical-services/medical-services.component";
import { DoctorsComponent } from "../doctors/doctors.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";


@Component({
  selector: 'app-main',
  imports: [RouterModule, MedicalServicesComponent, DoctorsComponent, ContactFormComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor() {

    RouterModule.forRoot(routes, { anchorScrolling: "enabled" });
  }



  services: Service[] = services;




}

