import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {HotelService} from '../hotel/hotel.service'
import {AuthService} from '../services/auth.service'
import {IUser,IHotel,IEmployee} from '../shared/model'
import {UserService} from '../services/user.service'


@Component({
    templateUrl:"./manager-home.component.html"
})

export class ManagerHomeComponent implements OnInit {

    employees:IEmployee[] = []
    hotels:IHotel[] = []

        ngOnInit(): void {
            console.log(this.getHotels())
            
            console.log(this.employees)
        }


    constructor(private hotelService:HotelService,
        private auth:AuthService,
        private userService:UserService,
        private router:Router){

            this.employees = this.getEmployees()
            this.hotels = this.getHotels()

    }
    //method returns hotels for current user 
    getHotels(){  
         return this.userService.getHotelsForUser(this.auth.currentUser.id)
    }

    //return employees for current user
    getEmployees(){
        return this.userService.getUserEmployees(this.auth.currentUser.id)
    }   

}