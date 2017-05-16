import {Component} from '@angular/core'
import {Router} from '@angular/router'

import {IRoom} from '../shared/model'
import {HotelService} from '../hotel/hotel.service'

@Component({
    templateUrl:"./add-room.component.html"
})

export class AddRoomComponent {

    room:IRoom

    constructor(private router:Router,
        private hotelService:HotelService){

    }

    AddRoom(form:any){
        this.room = {
            //id:3,
            id:this.hotelService.generateRoomIdForHotel(this.hotelService.currentHotel.id),
            description:form.description,
            roomNumber:form.number,
            available:true,
            price:form.price
        }

        this.hotelService.addRoomToHotel(this.hotelService.currentHotel.id,this.room)
        this.router.navigate(['emp/hotel/'+this.hotelService.currentHotel.id])
    }
   

}