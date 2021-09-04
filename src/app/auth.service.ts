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

  public userObject: CognitoUser;

  constructor(
    private router: Router
  ) { 
    Auth.configure(awsmobile);
  }

  private static currentUser(): Observable<CognitoUser> {
    return from(Auth.currentAuthenticatedUser());
  }

  

}
