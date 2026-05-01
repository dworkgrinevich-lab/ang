import { Component } from '@angular/core';
import { RegistrationType } from '../../components/registration-type/registration-type';

@Component({
  selector: 'app-registration-create',
  imports: [RegistrationType],
  templateUrl: './registration-create.html',
  styleUrl: './registration-create.scss',
})
export class RegistrationCreate {}
