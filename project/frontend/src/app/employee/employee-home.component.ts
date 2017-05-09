import {Component} from '@angular/core'

import {EmployeeService} from '../employee/employee.service'

@Component({
    templateUrl:"app/employee/employee-home.component.html"
})

export class EmployeeHomeComponent {

    constructor(private empService:EmployeeService){

    }

    

}