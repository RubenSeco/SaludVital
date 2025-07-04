import { ValidationErrors } from "@angular/forms";

export class FormUtils {

  static namePattern = /^[a-z0-9]{3}$/i;
  static emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
  static phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  static slugPattern = /[^A-Za-z0-9 ]/;



  static getTextError(errors: ValidationErrors) {


    for (const key of Object.keys(errors)) {

      switch (key) {
        case "required": return "Este campo es requerido";

        case "minlength": return `El mínimo de caracteres es ${errors[key].requiredLength}`;

        case "min": return `El mínimo de caracteres es ${errors[key].min}`;

        case "pattern": return "El formato no es válido";

        default: return `Error de validaciòn no controlado ${key}`;
      }

    }

    return null;
  }
}
