import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  RatingOptions,
  RatingPickerComponent,
} from '../rating-picker/rating-picker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-picker-page',
  standalone: true,
  imports: [RatingPickerComponent, ReactiveFormsModule],
  templateUrl: './rating-picker-page.component.html',
  styleUrls: ['../../common-page.scss', './rating-picker-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerPageComponent implements OnInit {
  form = new FormGroup({
    feedback: new FormControl(''),
    rating: new FormControl<RatingOptions>('good'),
  });

  onSubmit() {
    console.log(this.form.getRawValue());
  }

  ngOnInit() {}
}
