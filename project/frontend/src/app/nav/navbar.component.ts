import {Component} from '@angular/core'

import {AuthService} from '../services/auth.service'

@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.component.html',    
})

export class NavigationComponent{      
    
    constructor(private auth:AuthService){
        
    }

    logout(){
        this.auth.logout()
    }

}