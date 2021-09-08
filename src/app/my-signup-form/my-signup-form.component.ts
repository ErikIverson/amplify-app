import { Component } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Auth from '@aws-amplify/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-signup-form',
  templateUrl: './my-signup-form.component.html',
  styleUrls: ['./my-signup-form.component.scss']
})
export class MySignupFormComponent {

  constructor(
    private authService: AuthService
  ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  public registerUser() {
    console.log(this.form.value);
    Auth.signUp(
      this.form.value.username, 
      this.form.value.password, 
      this.form.value.email, 
      this.form.value.phone
      ).then( results => {
        console.log('Successful registration: ', results)
        console.log('Please wait for a confirmation email to be sent.')
      }).catch(e => {
        console.error('Registration Error: ', e);
      });
  }

}
