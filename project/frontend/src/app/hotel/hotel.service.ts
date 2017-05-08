import {Injectable} from '@angular/core'

import {IHotel} from '../shared/model'
import {UserService} from '../services/user.service'
import {USERS} from '../services/user.service'

@Injectable()
export class HotelService {

   getHotelsForUser(id:number){

       let myHotels:IHotel[] = []
       for(let hotel of hotels){
           for(let user of hotel.users){
               if(user.id === id){
                    myHotels.push(hotel)
               }
           }
       }

       return myHotels
   }

}

export const hotels:IHotel[] =[
    {
        id:1,
        name:"Rahova hotel",
        users:[USERS[1]],
        rooms:[{
            id:1,
            roomNumber:201,
            available:true
        }]
    }
]

