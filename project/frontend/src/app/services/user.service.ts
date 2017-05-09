import {Injectable} from '@angular/core'

import { IUser } from '../shared/model';
import {HOTELS} from '../hotel/hotel.service'
import {IHotel} from '../shared/model'
import {EMPLOYEES} from '../employee/employee.service'
import {IEmployee} from '../shared/model'

@Injectable()
export class UserService {

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

   getUserEmployees(id:number):IEmployee[]{
       let emp:IEmployee[] = []
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
    
