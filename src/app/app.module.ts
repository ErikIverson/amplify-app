import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyLoginFormComponent } from './my-login-form/my-login-form.component';

/* import Angular Material Modules */
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyLoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
