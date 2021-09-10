import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Auth, { CognitoUser } from '@aws-amplify/auth';
import { BehaviorSubject, Observable, from } from 'rxjs';
import awsmobile from 'src/aws-exports';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  public currentUser: CognitoUser;

  constructor(
    private router: Router
  ) { 
    Auth.configure(awsmobile);
  }

  public getCurrentUser(): Observable<CognitoUser> {
    return from(Auth.currentAuthenticatedUser());
  }

  public login(username, password) {
    Auth.signIn(username, password).then((userInfo: CognitoUser) => {
      this.currentUser = userInfo;
      this.router.navigate(['home']);
    }).catch(e => console.error('Login Error: ', e))
  }

  public logout() {
    Auth.signOut();
    this.router.navigate(['/login']);
    console.log('logout')
  }



}
