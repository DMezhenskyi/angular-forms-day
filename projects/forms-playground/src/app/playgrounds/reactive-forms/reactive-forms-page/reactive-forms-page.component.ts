import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { banWords } from '../../../core/validators/ban-words.validator';

@Component({
  selector: 'app-reactive-forms-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms-page.component.html',
  styleUrls: [
    '../../common-page.scss',
    '../../common-form.scss',
    './reactive-forms-page.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormsPageComponent implements OnInit {
  form = new FormGroup({
    displayName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      banWords(['test'])
    ]),
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[\w.]+$/),
      banWords(['test', 'anonymous'])
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    yearOfBirth: new FormControl(1991),
    passportNumber: new FormControl<number | null>(null),
    address: new FormGroup({
      fullAddress: new FormControl(''),
      city: new FormControl(''),
      postCode: new FormControl(''),
    }),
  });
  onSubmit() {
    if (!this.form.invalid) {
      console.log(this.form.getRawValue());
    }
  }

  get years() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 40))
      .fill('')
      .map((_, idx) => now - idx);
  }

  ngOnInit(): void {}
}
