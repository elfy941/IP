import {Component,Input} from '@angular/core'

import {IRoom} from '../shared/model'

@Component({
    selector:"room",
    template:`
       
    <!-- Page Content -->
    

        <!-- Project One -->
        <div class="row">
            <div class="col-md-7">
                <a href="portfolio-item.html">
                    <img class="img-responsive img-hover" src="http://placehold.it/700x300" alt="">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Room : {{room.roomNumber}}</h3>
                <h4>Description : {{room.description}} </h4>
                <h3>Available : {{room.available}}</h3>                
                <a class="btn btn-primary" href="portfolio-item.html">Book Room</a>
            </div>
       
        <!-- /.row -->

        


  


    `
})

export class RoomComponent {

    @Input()
    room:IRoom

}