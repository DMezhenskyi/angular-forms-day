import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

export type RatingOptions = 'great' | 'good' | 'neutral' | 'bad' | null;

@Component({
  selector: 'app-rating-picker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './rating-picker.component.html',
  styleUrl: './rating-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerComponent {
  @Input()
  value: RatingOptions = null;

  @Input()
  disabled = false;

  @Output()
  change = new EventEmitter<RatingOptions>();

  @Input()
  @HostBinding('attr.tabIndex')
  tabIndex = 0;

  setValue(value: RatingOptions) {
    this.value = value;
  }
}
