import {Component} from '@angular/core'
import {Router} from '@angular/router'

import {EmployeeService} from '../employee/employee.service'
import {UserService} from '../services/user.service'
import {IEmployee} from '../shared/model'
import {AuthService} from '../services/auth.service'

@Component({
    templateUrl:"./create-employee.html"
})

export class CreateEmployeeComponent {

    emp:IEmployee

    constructor(private router:Router,private empService:EmployeeService,
        private userService:UserService,private auth:AuthService){

    }

    cancel(){
         this.router.navigate(['/manager/profile'])   
    }

    create(createEmpForm:any){

        console.log(createEmpForm)
        let idEmp = this.empService.generateId()

        this.emp = {
            id:idEmp,
            firstName : createEmpForm.firstName,
            lastName : createEmpForm.lastName,
            email : createEmpForm.email,
            password : createEmpForm.password
        }
        

         this.empService.addEmployee(this.emp)
         this.userService.addEmployeeToManager(this.auth.currentUser.id,this.emp)

         this.router.navigate(['/manager/profile'])
    }

}