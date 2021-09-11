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
    name: new FormControl('Erik Iverson')
  });

  public registerUser() {
    console.log(this.form.value);
    const username = this.form.value.username;
    const password = this.form.value.password;
    const email = this.form.value.email;
    const phone = this.form.value.phone;
    const name = 'Erik Iverson'
    Auth.signUp(
      {
        username,
        password,
        attributes: {
          'email': email,
          'phone_number': phone,
          'name' : name
        }
      }
      ).then( results => {
        console.log('Successful registration: ', results)
        console.log('Please wait for a confirmation email to be sent.')
      }).catch(e => {
        console.error('Registration Error: ', e);
      });
  }

}
