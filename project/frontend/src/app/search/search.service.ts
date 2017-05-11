import {Injectable,OnInit} from '@angular/core'

import {IHotel,IRoom} from '../shared/model'
import {HotelService} from '../hotel/hotel.service'
import {ISearch} from '../search/search.object'
import {HOTELS} from '../hotel/hotel.service'


@Injectable()
export class SearchService {
   
    hotelsCoppy:IHotel[]
    hotels:IHotel[]

    getHotels():IHotel[]{
        return this.hotels
    }

    coppyArray(){
        this.hotelsCoppy = []
        for(let h of HOTELS){
            this.hotelsCoppy.push(h)
        }
    }

    search(obj:ISearch):IHotel[]{
        let hotels:IHotel[] = [] 
        this.coppyArray()       
        
        console.log(HOTELS)
        //search all the hotels after hotel location
        hotels = this.hotelsCoppy.filter(h => h.location === obj.location)    

        for(let hotel of hotels){
            hotel.rooms = hotel.rooms.filter(room => room.price <= obj.price)                        
        }

        //remove hotels with 0 rooms
        hotels = hotels.filter(h => h.rooms.length > 0)

        this.hotels = hotels
        this.hotelsCoppy = null

        return hotels

    }

    emptyHotelArray(){
        this.hotels = null
    }

}