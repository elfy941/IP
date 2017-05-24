import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Http,Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import {IUser} from '../shared/model'
import {UserService} from '../services/user.service'
import {EmployeeService} from '../employee/employee.service'


@Injectable()
export class AuthService {

    constructor(private userService:UserService,private router:Router,
        private employeeService:EmployeeService,
        private http:Http){

    }

    currentUser:any

    private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


    getCurrentUser(){
        return this.currentUser
    }

    isAuthenticated(){
        return !!this.currentUser

    }

    /*
        @Deprecated
    */
    login(username:string,password:string){

        if(this.employeeService.getEmployee(username,password) != null){
            //this.employeeService.manager = this.employeeService.getEmployee(username,password)
            //console.log(this.employeeService.manager);
            this.currentUser = this.employeeService.getEmployee(username,password)
            this.employeeService.manager = this.userService.getManagerForEmployee(this.currentUser.id)
            
            console.log(this.userService.manager)
            this.router.navigate(['home'])
        } 
        else if(this.userService.getUser(username,password) != null){
            this.currentUser = this.userService.getUser(username,password)
            this.router.navigate(['home'])
        }
               
    }

    /*
        @toUSE
    */
    loginBack(username:string,password:string){
        let url = `/api/login/${username}/${password}`
        let user :IUser

           this.http.get(url).toPromise().then(response =>{
            console.log(response.json());
            user =  response.json() as IUser
        })

        if(user != null && user != undefined){
            this.currentUser = user
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

    isEmployee(){
       return  this.isAuthenticated() && !this.isManager() && !this.isAdmin()                        
    }
}