import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-my-login-form',
  templateUrl: './my-login-form.component.html',
  styleUrls: ['./my-login-form.component.scss']
})
export class MyLoginFormComponent {

  constructor(
    private authService: AuthService
  ) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  loginUser() {
    this.authService.login(this.form.value.username, this.form.value.password);
  }

}
