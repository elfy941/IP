import {Component} from '@angular/core'
import {Router} from '@angular/router'

import {ISearch} from '../search/search.object'
import {SearchService} from '../search/search.service'
import {IHotel} from '../shared/model'

@Component({

    selector:"search",
    templateUrl:"app/search/search.component.html",
    styles:[`
            .container{
             margin-top:30px;
        }

        .filter-col{
            padding-left:10px;
            padding-right:10px;
        }
    `]

})

export class SearchComponent {

    searchObject:ISearch
    hotels:IHotel[]

    constructor(private searchService:SearchService,
        private router:Router){

    }

    

    search(form:any){
        this.searchObject = {
            location : form.location,
            order : form.order,
            price : form.price
        }
        console.log(this.searchObject)
        this.hotels = this.searchService.search(this.searchObject)
        console.log(this.hotels)

        this.router.navigate(['result'])
    }

}