import { Component } from '@angular/core';
import { MedicalService } from '../../../interfaces/dashboard.interface';
import { medicalServices } from '../../../data/data-main';

@Component({
  selector: 'app-medical-services',
  imports: [],
  templateUrl: './medical-services.component.html',
})
export class MedicalServicesComponent {
  medicalServices: MedicalService[] = medicalServices;

}
