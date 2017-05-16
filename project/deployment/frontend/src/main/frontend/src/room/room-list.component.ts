import {Component,Input} from '@angular/core'

import {IRoom} from '../shared/model'
import {RoomComponent} from '../room/room.component'

@Component({
    selector:"room-list",
    template:`
            <hr>
            <div *ngFor="let r of rooms">
                <room [room]="r"></room>
                <hr>
            </div>
        
    `
})

export class RoomListComponent {
    @Input()
    rooms:IRoom[] 
} 