import {ManagerHomeComponent} from '../manager/manager-home.component'
import {ManagerProfileComponent} from '../manager/manager-profile.component'
import {CreateEmployeeComponent} from '../manager/create-employee'

export const userRoutes = [
    {
        path:'home',
        component:ManagerHomeComponent
    },
    {
        path:'profile',
        component:ManagerProfileComponent
    },
    {
        path:'createEmp',
        component:CreateEmployeeComponent        
    }
    
]