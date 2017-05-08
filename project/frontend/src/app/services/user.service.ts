import {Injectable} from '@angular/core'

import { IUser } from '../shared/model';

@Injectable()
export class UserService {

    getUser(email:string,password:string):IUser{
        
        let user =  USERS.filter(u => u.email === email )[0];

        if(user.password === password) return user
        else return null
    }

}

export const USERS : IUser[] =  [
    {
        id:1,
        firstName:"Admin",
        lastName:"Admin",
        email:"admin@gmail.com",
        role:"admin",
        password:"admin"
    },
    {
        id:2,
        firstName:"Manager",
        lastName:"Manager",
        email:"manager@gmail.com",
        role:"manager",
        password:"manager"
    },{
        id:3,
        firstName:"Employee",
        lastName:"Employee",
        email:"user@gmail.com",
        role:"employee",
        password:"user"
    }
]
    
