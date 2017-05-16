import {EmployeeHomeComponent} from '../employee/employee-home.component'
import {HotelComponent} from '../hotel/hotel-component'
import {AddRoomComponent} from '../room/add-room.component'

export const userRoutes = [
    {
        path:'home',
        component:EmployeeHomeComponent
    },
    {
        path:'hotel/:id',
        component:HotelComponent
    },
    {
        path:'add',
        component: AddRoomComponent
    }
    
]