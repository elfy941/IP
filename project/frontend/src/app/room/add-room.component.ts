import {Component} from '@angular/core'
import {Router} from '@angular/router'

import {IRoom} from '../shared/model'
import {HotelService} from '../hotel/hotel.service'

@Component({
    templateUrl:"app/room/add-room.component.html"
})

export class AddRoomComponent {

    room:IRoom

    constructor(private router:Router,
        private hotelService:HotelService){

    }

    AddRoom(){
        this.room = {
            id:4,
            description:"zer nice room",
            roomNumber:909,
            available:true
        }

        this.hotelService.addRoomToHotel(this.hotelService.currentHotel.id,this.room)
        this.router.navigate(['emp/hotel/'+this.hotelService.currentHotel.id])
    }
   

}