import {Injectable} from '@angular/core'

import {IHotel,IUser} from '../shared/model'
import {UserService} from '../services/user.service'
import {USERS} from '../services/user.service'
import {AuthService} from '../services/auth.service'


@Injectable()
export class HotelService {

    

    /*
        This method returns all hotels of a Manager
    */
  
   


 


}

export const HOTELS:IHotel[] =[
    {
        id:1,
        name:"Rahova hotel",       
        rooms:[{
            id:1,
            roomNumber:201,
            available:true
        }],
        description:"This is the description of Rahova Hotel",
        nrRooms:400
    },
     {
        id:2,
        name:"Berceni hotel",
        rooms:[{
            id:1,
            roomNumber:201,
            available:true
        }],
        description:"This is the description of Berceni Hotel",
        nrRooms:400
    }
]

