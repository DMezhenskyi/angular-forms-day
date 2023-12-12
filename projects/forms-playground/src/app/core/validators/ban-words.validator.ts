import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * Validators in reactive forms are a simple functions.
 * As an argument it gets an instance of the form control to which one
 * this validator is attached. You can read the value of the control
 * and check it against your logic. If the value is supposed to be valid,
 * the validator must return null. If not - any other value. By convention,
 * for invalid values, it is good to return an object with the key of the validator name that contains
 * additional data that might be useful to determine why exactly validation
 * has failed.
 * For example, for failed validation the return value could be:
 * { banWords: { ... } }
 */

export function banWords(bannedWords: string[] = []): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    /**
     * You logic is here
     */
    return null;
  }
}
