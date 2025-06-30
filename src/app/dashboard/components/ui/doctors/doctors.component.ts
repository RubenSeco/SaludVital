import { Component } from '@angular/core';
import { Doctor } from '../../../interfaces/dashboard.interface';
import { doctors } from '../../../data/data-main';

@Component({
  selector: 'app-doctors',
  imports: [],
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent {
  doctors: Doctor[] = doctors;

}
