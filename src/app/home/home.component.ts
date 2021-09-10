import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Auth, {CognitoUser} from '@aws-amplify/auth';
import { AuthService } from '../auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  currentUser: CognitoUser;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  goToPath(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }

}
