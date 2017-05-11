import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {userRoutes} from '../manager/manager.routes'

import {ManagerHomeComponent} from '../manager/manager-home.component'
import {HotelService} from '../hotel/hotel.service'
import {ManagerProfileComponent} from '../manager/manager-profile.component'
import {AuthService} from '../services/auth.service'
import {UserService} from '../services/user.service'
import {CreateEmployeeComponent} from '../manager/create-employee'
import {EmployeeService} from '../employee/employee.service'



@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        ManagerHomeComponent,
        ManagerProfileComponent,
        CreateEmployeeComponent        
    ],
    providers:[
        HotelService,
        EmployeeService
    ]
})

export class ManagerModule{

}