import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {userRoutes} from '../employee/employee.routs'
import {EmployeeService} from '../employee/employee.service'
import {EmployeeHomeComponent} from '../employee/employee-home.component'
import {AuthService} from '../services/auth.service'
import {HotelService} from '../hotel/hotel.service'
import {RoomComponent} from '../room/room.component'
import {RoomListComponent} from '../room/room-list.component'
import {AddRoomComponent} from '../room/add-room.component'
import {HotelComponent} from '../hotel/hotel-component'



@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        EmployeeHomeComponent,
        RoomComponent,
        RoomListComponent,
        AddRoomComponent,
        HotelComponent
    ],
    providers:[       
        EmployeeService,
        HotelService,        
    ]
})

export class EmployeeModule{

}