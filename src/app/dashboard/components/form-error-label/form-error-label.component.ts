import { Component, input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-form-error-label',
  imports: [],
  templateUrl: './form-error-label.component.html',
})
export class FormErrorLabelComponent {


  // Eltipo de dato AbstractControl se obtiene viendo el tipo de dato de [control] donde se aplica el componente
  // [control]="myForm.get('email')"
  // myForm.get('email') es del tipo de dato AbstractControl
  // Esta es la forma en todos los casos de obtener cualquier tipo de dato.

  control = input.required<AbstractControl>();


  get errorMessage() {
    const errors: ValidationErrors = this.control().errors || {};
    return this.control().touched && Object.keys(errors).length > 0 ? FormUtils.getTextError(errors) : null;
  }
}
