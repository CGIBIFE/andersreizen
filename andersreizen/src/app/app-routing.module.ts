import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import { LoginComponent } from './login/login.component'
import {SignupComponent} from "./signup/signup.component";
import {PreLoginComponent} from './pre-login/pre-login.component'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {IntroComponent} from "./intro/intro.component";
import {DataInvoerComponent} from "./data-invoer/data-invoer.component";
import {AuthGuardService} from "./service/auth-guard.service";


const routes: Routes = [
    {path:'', component:PreLoginComponent, children:[
            {path:'',component: LoginComponent },
            {path:'login',component: LoginComponent },
            {path:'signup',component: SignupComponent },
        ]},
    {path:'user', component: DashboardComponent, children:[
            {path: '', component: IntroComponent},
            {path: 'intro', component: IntroComponent},
            {path: 'data-invoer', component: DataInvoerComponent}
        ],canActivate:[AuthGuardService] }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
