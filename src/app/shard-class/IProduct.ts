import { DiscountOffers } from "./DiscountOffers";
export interface IProduct{
    ID:number;
    Name:string;
    Quantity:number;
    Price:number;
    Image:string;
    Discount:DiscountOffers;
    cateId:number;
    
}