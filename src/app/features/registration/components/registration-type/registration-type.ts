import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-registration-type',
  templateUrl: './registration-type.html',
  styleUrl: './registration-type.scss',
  imports: [MatRadioButton, MatRadioGroup],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationType {}
