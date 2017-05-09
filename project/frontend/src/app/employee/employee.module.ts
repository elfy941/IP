import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {userRoutes} from '../employee/employee.routs'
import {EmployeeService} from '../employee/employee.service'
import {EmployeeHomeComponent} from '../employee/employee-home.component'
import {AuthService} from '../services/auth.service'


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        EmployeeHomeComponent
    ],
    providers:[       
        EmployeeService,
        
        
    ]
})

export class EmployeeModule{

}