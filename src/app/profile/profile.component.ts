import { Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
