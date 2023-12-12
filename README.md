# AdvancedAngularForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Tasks

1. Add built-in validators to some of the form controls:

- DisplayName Control -> Required, Minimum Length 2 character;
- Nickname Control -> Required, Minimum Length 2, Only letters, numbers, and \_ symbol is allowed (RegExp - `/^[\w.]+$/` );
- Email Control -> Required, Valid email;

2. Highlight controls state in UI by adding corresponding styles in `styles.scss`

- Invalid Controls get a red border;
- Valid Controls get a green border;
- (optionally) Borders should appear only on dirty control (interacted with user)

3. Show error messages for invalid forms
4. Prevent the form submission when the form is invalid
5. Under `./core/validators` find the `ban-words.validator.ts`. This is a template for a custom validator. Please write inside the logic that invalidates the control with a value provided in the validator config. Example: if control is set up like: `new FormControl('', banWords(['test']))` then the input should be invalid if it has a value `test`. After you finish, please apply this validator to any control and define any banned words. Make sure that you also adjusted and added error messages for this validators
6. (OPTIONAL) Under `./core/validators` find the `nickname-checker.validator.ts`. This is a template for a custom async validator. Please implement the logic following the instructions. Apply the validator to the nickname form control. Make sure that you adapted the error messages in the template. You will probably be surprised because the validator might work correctly but the view might not be updated accordingly. This is because of the OnPush change detection strategy. To fix the issue you have to subscribe for `statusChanges` and trigger `ChangeDetectorRef.markForCheck()`.
7. Add and remove the validator dynamically to the form control. If the user has selected their age and the age is > 18 years old - Apply `Validator.required` to the `passportNumber` form control. If the user is not an adult - remove the 'required' validator. You can add or remove validators using the `addValidators` / `removeValidators` methods of the corresponding `FormControl`. Pay attention that the applied validator will not be immediately triggered. You have to do it manually by calling the `updateValueAndValidity` method of the same `FormControl`.
8. In the project, you have a component `rating-picker.component.ts`. Attempting to apply the `formControlName` directive to this component fails, so we can not use it as a normal form control. Take 10-15 minutes to think about how you would solve this issue and how you would bind the value from Rating Picker with the form and corresponding form control.
