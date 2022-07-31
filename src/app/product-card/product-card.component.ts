import { Component, OnInit,Input } from '@angular/core';
import { DiscountOffers } from '../shard-class/DiscountOffers';
import { ICategory } from '../shard-class/ICateogry';
import { IProduct } from '../shard-class/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
   Discount:DiscountOffers;
   storeName:string='';
   storeLogo:string='';
   ClientName:string='';
   IsPurshased:boolean=false;
   
   
   
  
   constructor() { 
     this.Discount=DiscountOffers.noDiscount;
     this.storeLogo='../../assets/images/products/1.jpg'
     this.ClientName='Ahmed Alaa'
      
    }
    @Input('product')public Product:any;
    
    ngOnInit(): void {
  }
  
}
