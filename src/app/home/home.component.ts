import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth, {CognitoUser} from '@aws-amplify/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: CognitoUser;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }


  logout() {
    Auth.signOut();
    this.router.navigate(['/login']);
    console.log('logout')
  }
}
