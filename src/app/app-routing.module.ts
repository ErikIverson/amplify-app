import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full",
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
