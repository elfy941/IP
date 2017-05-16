import {Routes} from '@angular/router'

import {HomeComponent} from '../home/home.component'
import {RegisterComponent} from '../register/register.component'
import {LoginComponent} from '../login/login.component'
import {SearchResult} from '../search/search-result.component'

export const appRoutes:Routes = [
   
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },/*
    This is how you load a custom module into the application .
    The loadChildren property it is a string made from two parts ,
        one is the path to the folder + # + module class name
    */
    {
        path:'manager',
        loadChildren:'manager/manager.module#ManagerModule'
    },
    {
        path:'emp',
        loadChildren:'employee/employee.module#EmployeeModule'
    },
    {
        path:'result',
        component:SearchResult
    }
   
        
]