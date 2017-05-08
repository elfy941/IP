import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {userRoutes} from '../manager/manager.routes'

import {ManagerHomeComponent} from '../manager/manager-home.component'
import {HotelService} from '../hotel/hotel.service'


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        ManagerHomeComponent
    ],
    providers:[
        HotelService
    ]
})

export class ManagerModule{

}