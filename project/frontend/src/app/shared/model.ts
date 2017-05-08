export interface IUser{

    id:number,
    firstName:string,
    lastName:string,
    email:string,
    role:string,
    password:string,

}

/*
    - cum verific daca o camera a fost eliberata ?
*/
export interface Room {

    id:number,
    roomNumber:number,
    available:boolean,
    
}

export interface IHotel {

    id:number,
    name:string,
    users:IUser[],
    rooms:Room[],
    description:string

}