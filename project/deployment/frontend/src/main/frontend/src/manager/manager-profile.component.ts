import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'


import {AuthService} from '../services/auth.service'
import {IUser,IEmployee,IHotel} from '../shared/model'
import {UserService} from '../services/user.service'
import {EmployeeService} from '../employee/employee.service'

@Component({
    templateUrl:"./manager-profile.component.html"
})

export class ManagerProfileComponent implements OnInit {

    currentUser:IUser
     employees:IEmployee[] = []
    hotels:IHotel[] = [] 

    ngOnInit(): void {
            this.currentUser = this.auth.currentUser
            // this.userService.getUserEmployees(this.currentUser.id).then(
            //     emp => this.employees = emp                        
            // )
            console.log(this.employees)

    }


    constructor(private auth:AuthService,
        private router:Router,
        private userService:UserService,
        private empService:EmployeeService){

        
        this.hotels = this.getHotels()
        this.employees = this.getEmployees()

    }

    cancel(){
        this.router.navigate(['/manager/home'])
    }

    addEmployee(){
        this.router.navigate(['/manager/createEmp'])
    }

      getHotels(){  
         return this.userService.getHotelsForUser(this.auth.currentUser.id)
    }

    //return employees for current user
    getEmployees(){
        return this.userService.getUserEmployees(this.auth.currentUser.id)
    }

    //not working
    remove(emp:any){
        console.log(emp)
        this.empService.removeEmp(emp.id)   
        this.userService.removeEmployeeFromManager(this.auth.currentUser.id,emp.id)
        
    }


   



}