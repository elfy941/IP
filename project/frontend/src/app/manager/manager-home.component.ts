import {Component,OnInit} from '@angular/core'

import {HotelService} from '../hotel/hotel.service'
import {AuthService} from '../services/auth.service'

@Component({
    templateUrl:"app/manager/manager-home.component.html"
})

export class ManagerHomeComponent implements OnInit {

        ngOnInit(): void {
            console.log(this.getHotels())
        }


    constructor(private hotelService:HotelService,
        private auth:AuthService){

    }

    getHotels(){  
         return this.hotelService.getHotelsForUser(this.auth.currentUser.id)
    }

}