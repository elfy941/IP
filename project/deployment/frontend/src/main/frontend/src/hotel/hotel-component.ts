import {Component,OnInit,Input} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router'

import {IHotel,IRoom} from '../shared/model'
import {HotelService} from '../hotel/hotel.service'
import {RoomListComponent} from '../room/room-list.component'
import {AuthService} from '../services/auth.service'


@Component({    
    templateUrl:"./hotel.component.html"
})

export class HotelComponent implements OnInit {

    
        hotel:IHotel
        rooms:IRoom[]        

        constructor(private hotelService:HotelService,
            private route:ActivatedRoute,
            private auth:AuthService,
            private router:Router){
            
           

        }

        ngOnInit(): void {
            this.hotel = this.hotelService.getHotel(+this.route.snapshot.params['id'])
            this.rooms = this.hotel.rooms
            console.log(this.rooms)    
                 
        }

        addRoom(){
             this.hotelService.setCurrentHotel(this.hotel)  
            this.router.navigate(['/emp/add'])
        }


}