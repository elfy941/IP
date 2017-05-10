export interface IUser{

    id:number,
    firstName:string,
    lastName:string,
    email:string,
    role:string,
    password:string,
    hotels:IHotel[],
    employees:IEmployee[]

}

export interface IEmployee {
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    password:string,    
}

/*
    - cum verific daca o camera a fost eliberata ?
*/
export interface IRoom {

    id:number,
    roomNumber:number,
    description:string,
    available:boolean,
    
}

export interface IHotel {

    id:number,
    name:string,        
    rooms:IRoom[],
    description:string,
    nrRooms:number,

}