
import {Injectable} from '@angular/core'

import {IEmployee,IUser} from '../shared/model'
import {USERS} from '../services/user.service'


@Injectable()
export class EmployeeService {

   

    manager:any

    addEmployee(empl:IEmployee){        
        EMPLOYEES.push(empl)
    }

    generateId(){
        return EMPLOYEES[EMPLOYEES.length-1].id + 1
    }

    removeEmp(id:number){
        for(let emp of EMPLOYEES){
            if(emp.id === id){
                console.log(EMPLOYEES.indexOf(emp))
                EMPLOYEES.splice(EMPLOYEES.indexOf(emp),1)
                
            }
        }
    }

    getEmployee(email:string,password:string){

        for(let emp of EMPLOYEES){
            if(emp.email === email && emp.password === password){
                return emp
            }
        }
        return null
    }

    // getManager(){
    //     for(let user of USERS){
    //         for(let emp of user.employees){
    //             if(emp.id === this.auth.currentUser.id){
    //                 this.manager = user
    //             }
    //         }
    //     }
    // }



}

export const EMPLOYEES : IEmployee[] = [
    {
        id:1,
        firstName:"Ion",
        lastName:"Gheorghe",
        email:"emp@gmail.com",
        password:"emp"
    }
]