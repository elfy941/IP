import {Component} from '@angular/core'
import {Router} from '@angular/router'

import {EmployeeService} from '../employee/employee.service'
import {IHotel,IUser} from '../shared/model'
import {UserService} from '../services/user.service'
import {AuthService} from '../services/auth.service'
import {IRoom} from '../shared/model'


@Component({
    templateUrl:"./employee-home.component.html"
})

export class EmployeeHomeComponent {
       
    manager : IUser
    hotels:IHotel[]
    

    constructor(private empService:EmployeeService,
        private userService:UserService,
        private authService:AuthService,
        private router:Router){
            this.manager = this.userService.getManagerForEmployee(this.authService.currentUser.id)
        console.log(this.manager)
        this.hotels = this.manager.hotels

        
    }

    goToHotel(id:number){
        this.router.navigate(['emp/hotel/'+id])
    }

    

    

}