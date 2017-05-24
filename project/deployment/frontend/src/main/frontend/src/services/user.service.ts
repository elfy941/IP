import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'


import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { IUser } from '../shared/model';
import {HOTELS} from '../hotel/hotel.service'
import {IHotel} from '../shared/model'
import {EMPLOYEES} from '../employee/employee.service'
import {IEmployee} from '../shared/model'


@Injectable()
export class UserService {

    private userUrl = 'api/users' //URL to web api
    

    manager:IUser
    emp:IEmployee[]

    constructor(private http:Http){

    }

    getUsers():Observable<IUser[]> {
        return this.http.get(this.userUrl).map(this.extractData).catch(this.handleError)
    }


    private extractData(res:Response){
        let body = res.json()
        return body.data || { };
    }

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

    getUser(email:string,password:string):IUser{
        
        let user =  USERS.filter(u => u.email === email )[0];

        if(user.password === password) return user
        else return null
    }

    getHotelsForUser(id:number):IHotel[]{
        let hotels:IHotel[] = []
        for(let user of USERS){
            if(user.id === id){
                hotels = user.hotels
            }
        }
        return hotels
    }
    /*
        This method returns all the IHotel objects of an user
        @toUSE
    */
    getUserHotels(id:number):Promise<IHotel[]>{
        let url = `/api/user/hotels/${id}`
        return this.http.get(url).toPromise().then(response =>{
            console.log(response.json());
            return response.json() as IHotel[]            
        }).catch(this.handleError)
        
    }

    /*
        This method returns all the IEmployee objects of an user
        @toUSE
    */
//    getUserEmployees(id:number):Promise<IEmployee[]>{
       
//     //    for(let user of USERS){
//     //     if(user.id === id){
//     //         emp = user.employees
//     //     }
//     //    }
//         let url = `/api/user/emps/${id}`

//         return this.http.get(url).toPromise().then(response => {
//             console.log(response.json());
//             return response.json() as IEmployee[]
//         }).catch(this.handleError);
                       
//    }

   getUserEmployees(id:number):IEmployee[] {
       let emp:IEmployee[]
       for(let user of USERS){
           if(user.id === id){
               emp = user.employees
           }
       }
       return emp
   }

   addEmployeeToManager(id:number,empl:IEmployee){
        for(let user of USERS){
            if(user.id === id){
                user.employees.push(empl)
            }
        }
   }

   removeEmployeeFromManager(idMgr:number,idEmp:number){
       for(let user of USERS){
           if(user.id === idMgr){
               for(let emp of user.employees){
                   if(emp.id === idEmp){
                       user.employees.slice(user.employees.indexOf(emp),1)
                   }
               }
           }
       }
   }

   getManagerForEmployee(idEmployee:number):IUser{
       
       for(let user of USERS){
           if(user.employees.length > 0){
               for(let emp of user.employees){
                   if(emp.id === idEmployee){
                        this.manager = user
                   }
               }
           }
       }

       return this.manager
   }

   



}

export const USERS : IUser[] =  [
    {
        id:1,
        firstName:"Admin",
        lastName:"Admin",
        email:"admin@gmail.com",
        role:"admin",
        password:"admin",
        hotels:[],
        employees:[]
    },
    {
        id:2,
        firstName:"Manager",
        lastName:"Manager",
        email:"manager@gmail.com",
        role:"manager",
        password:"manager",
        hotels:[HOTELS[0],HOTELS[1]],
        employees:[EMPLOYEES[0]]
    }
]
    
