import {Injectable,OnInit} from '@angular/core'

import {IHotel,IRoom} from '../shared/model'
import {HotelService} from '../hotel/hotel.service'
import {ISearch} from '../search/search.object'
import {HOTELS} from '../hotel/hotel.service'


@Injectable()
export class SearchService {
   
    hotels:IHotel[]

    getHotels():IHotel[]{
        return this.hotels
    }

    //not working momentarly
    sortByCriteria(hotels:IHotel[],obj:ISearch):IHotel[]{
        let results : IHotel[]

        for(let hotel of hotels){
            hotel.rooms.sort((h1:IRoom,h2:IRoom) => {
                if(obj.order === 'Ascending'){
                    return 1
                }else{
                    return -1
                }
            })
            results.push(hotel)
        }

        return results                                 
    }

    /*
        search algorithm uses an ISearch object as parameter.
        The alg searches first for the location of the hote that was introduced , 
            then after the room price
        The final results will contain only hotels that have at least on room suited for the 
            search criteria
    */    
    search(obj:ISearch):IHotel[]{

        let hotels:IHotel[] = []
        let results:IHotel[] = []             
        
        console.log(HOTELS)
        //search all the hotels after hotel location
        hotels = HOTELS.filter(h => h.location === obj.location)    

        for(let hotel of hotels){
            // hotel.rooms = hotel.rooms.filter(room => room.price <= obj.price)   

            let result:IHotel = {
                id:hotel.id,
                description:hotel.description,
                name:hotel.name,
                nrRooms:hotel.nrRooms,
                location:hotel.location,
                rooms:[]                             
            }
            for(let room of hotel.rooms){
                if(room.price <= obj.price && room.available === true){
                    result.rooms.push(room)
                }
            }
            if(result != undefined && result != null) {
                if(result.rooms.length > 0){
                    results.push(result)
                }   
            }
            
        }
              
        console.log(results)
        // this.hotels =  this.sortByCriteria(results,obj)        
        this.hotels = results
        return this.hotels
    }

}