import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import {  NavigationComponent } from './nav/navbar.component'
import { HomeComponent } from './home/home.component'
import {RegisterComponent} from './register/register.component'
import {LoginComponent} from './login/login.component'
import {AuthService} from './services/auth.service'
import {UserService} from './services/user.service'

import {appRoutes} from './routs'

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule 
     ],
  declarations: [ 
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent   
     ],
  bootstrap:    [ AppComponent ],
  providers:[
    AuthService,
    UserService
  ]
})
export class AppModule {}
