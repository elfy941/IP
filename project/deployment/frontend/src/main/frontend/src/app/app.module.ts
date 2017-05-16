import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import {  NavigationComponent } from '../nav/navbar.component'
import { HomeComponent } from '../home/home.component'
import {RegisterComponent} from '../register/register.component'
import {LoginComponent} from '../login/login.component'
import {AuthService} from '../services/auth.service'
import {UserService} from '../services/user.service'
import {EmployeeService} from '../employee/employee.service'
import {SearchComponent} from '../search/search.component'
import {SearchService} from '../search/search.service'
import {SearchResult} from '../search/search-result.component'
import {HotelService} from '../hotel/hotel.service'
import {ToasterModule} from 'angular2-toaster';


import {appRoutes} from './routs'

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ToasterModule 
     ],
  declarations: [ 
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    SearchResult
     ],
  bootstrap:    [ AppComponent ],
  providers:[
    AuthService,
    UserService,
    EmployeeService,
    SearchService,
    HotelService    
  ]
})
export class AppModule {}
