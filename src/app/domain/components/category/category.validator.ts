import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { ICategoryService } from "src/app/port/outbound/rest/category.service";
import { map } from 'rxjs/operators';
import { ICategory } from "../../model/category";

export class CategoryValidator {
    static checkIfUnique(service: ICategoryService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return service
          .getAll()
          .pipe(
            map((list: ICategory[]) =>
              list.some(c =>  c.description === control.value) ? {categoryAlreadyExists: true} : null
            )
          );
      };
    }
  }