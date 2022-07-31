import { IAddress } from "./IAddress";
import { IComany } from "./Icompany";

export  interface IUSer{
        id:number,
        name:string,
        usename:string,
        email:string,
        address:IAddress,
        phone:string,
        website:string,
        company:IComany
} 