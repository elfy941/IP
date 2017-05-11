import {Injectable} from '@angular/core'

import {IHotel,IUser,IRoom} from '../shared/model'
import {UserService} from '../services/user.service'
import {USERS} from '../services/user.service'
import {AuthService} from '../services/auth.service'



@Injectable()
export class HotelService {

    currentHotel : IHotel


    setCurrentHotel(hotel:IHotel){
        this.currentHotel = hotel
    }    

   getHotel(id:number){
        return HOTELS.find( hotel => hotel.id === id)
   }

   addRoomToHotel(idHotel:number,room:IRoom){
        for(let x of HOTELS){
            if(x.id === idHotel){
                x.rooms.push(room)
            }
        }
   }

   generateRoomIdForHotel(idHotel:number):number{
        let nr = 0
            for(let x of HOTELS){
                if(x.id === idHotel){
                    nr = x.rooms.length+1
                }
            }
        return nr
   }
   
  

}

export const     HOTELS:IHotel[] =[
    {
        id:1,
        name:"Rahova hotel",       
        rooms:[{
            id:1,
            roomNumber:201,
            description:"This is a nice room",
            available:true,
            price:300
        },{
            id:2,
            roomNumber:202,
            description:"This is a very nice room",
            available:true,
            price:100
        }],
        description:"This is the description of Rahova Hotel",
        nrRooms:400,
        location:"Bucuresti"
    },
     {
        id:2,
        name:"Berceni hotel",
        rooms:[{
            id:3,
            roomNumber:202,
            description:"This is another nice room",
            available:true,
            price:250
        }],
        description:"This is the description of Berceni Hotel",
        nrRooms:400,
        location:"Bucuresti"
    }
]



