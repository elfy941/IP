import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {ToasterService} from 'angular2-toaster';

import {SearchService} from '../search/search.service'
import {IHotel} from '../shared/model'
import {HotelService} from '../hotel/hotel.service'



@Component({
    templateUrl:"./search-result.component.html"
})

export class SearchResult implements OnInit {
    hotels:IHotel[]
    empty:boolean
    
    ngOnInit(): void {
       this.hotels = this.searchService.getHotels()
       console.log(this.hotels)
       if(this.hotels.length == 0) {
           this.empty = true
       }
    //    this.searchService.emptyHotelArray()
    }

    book(hotelId:number,roomId:number){
        //change availibity to a room
        this.hotelService.bookRoom(hotelId,roomId)
        this.popToast()
        this.router.navigate(['home'])
    }

     popToast() {
        this.toasterService.pop('success', 'Important Message', 'You have booked a room :)');
    }

    constructor(private searchService:SearchService,
        private hotelService:HotelService,
        private toasterService:ToasterService,
        private router:Router){
        
        
    }



}