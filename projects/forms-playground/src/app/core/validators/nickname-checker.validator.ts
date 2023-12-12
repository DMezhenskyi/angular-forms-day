import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

/**
 * In reactive forms, the async validator is usually represented as a service
 * or sometimes as a function. Unlike the sync validators, this ones return
 * Observable or Promise of ValidationErrors | null.
 * In this particular case, you have to perform a call to
 * https://jsonplaceholder.typicode.com/users?username=${control.value}`
 * and check if the array returned by this endpoint is empty. If it is empty,
 * it means that this nickname isn't taken, so the value is valid and validator
 * has to return an Observable of null. Otherwise, the observable should
 * return something similar to what we did for the sync custom validator.
 *
 * Adding the async validator to form control might be tricky because
 * it might require the explicit 'this' context binding using .bind() JS API.
 * If you stuck, please ping me.
 */


@Injectable({
  providedIn: 'root'
})
export class NicknameCheckerValidator implements AsyncValidator {
  #http = inject(HttpClient);

  validate(control: AbstractControl<string | null>): Observable<ValidationErrors | null> {
    // replace of(null) with your logic.
    return of(null)
  }

}
