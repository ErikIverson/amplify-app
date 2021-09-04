import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(username, password) {
    Auth.signIn(username, password).then(results => {
      this.router.navigate(['']);
    })
  }

}
