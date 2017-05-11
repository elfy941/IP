import {Component,OnInit} from '@angular/core'

import {SearchService} from '../search/search.service'
import {IHotel} from '../shared/model'
import {HotelService} from '../hotel/hotel.service'

@Component({
    templateUrl:"app/search/search-result.component.html"
})

export class SearchResult implements OnInit {
    hotels:IHotel[]
    
    ngOnInit(): void {
       this.hotels = this.searchService.getHotels()
       console.log(this.hotels)
    //    this.searchService.emptyHotelArray()
    }

    book(hotelId:number,roomId:number){
        //change availibity to a room
    }

    constructor(private searchService:SearchService){
        
        
    }



}