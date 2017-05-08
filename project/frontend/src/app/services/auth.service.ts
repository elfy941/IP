import {Injectable} from '@angular/core'
import {Router} from '@angular/router'

import {IUser} from '../shared/model'
import {UserService} from '../services/user.service'


@Injectable()
export class AuthService {

    constructor(private userService:UserService,private router:Router){

    }

    currentUser:IUser

    getCurrentUser(){
        return this.currentUser
    }

    isAuthenticated(){
        return !!this.currentUser

    }

    login(username:string,password:string){
        if(this.userService.getUser(username,password) != null){
            this.currentUser = this.userService.getUser(username,password)
            this.router.navigate(['home'])
        }
        
    }

    logout(){
        this.currentUser = null
        this.router.navigate(['home'])
    }

    /*
        shitty way to do it 
    */

    isAdmin(){
        if(this.isAuthenticated()){
            return this.currentUser.role === 'admin'
        }
    }

    isManager(){
        if(this.isAuthenticated()){
            return this.currentUser.role === 'manager'
        }
    }
}