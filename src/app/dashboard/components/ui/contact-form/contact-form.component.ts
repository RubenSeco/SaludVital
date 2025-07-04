import { Component, OnInit } from '@angular/core';
import { ContactInformation } from '../../../interfaces/dashboard.interface';
import { contactInformation } from '../../../data/data-main';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorLabelComponent } from "../../form-error-label/form-error-label.component";
import { FormUtils } from '../../../../utils/form-utils';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, FormErrorLabelComponent, FormErrorLabelComponent],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  contactInformation: ContactInformation[] = contactInformation;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({

      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      phone: ['', [Validators.required, Validators.pattern(FormUtils.phonePattern)]],
      motive: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });
  }

  ngOnInit(): void {
    console.log(this.myForm.status);
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Datos del formulario:', this.myForm.value);
      // También puedes acceder a los datos individualmente:
      console.log('Nombre:', this.myForm.get('firstname')?.value);
      console.log('Email:', this.myForm.get('email')?.value);
    } else {
      console.log('Formulario inválido');

      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.myForm.controls).forEach(key => {
        this.myForm.get(key)?.markAsTouched();
      });
    }
  }
}
