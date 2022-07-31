import { Injectable } from '@angular/core';
import { DiscountOffers } from '../../shard-class/DiscountOffers';
import { IProduct } from '../../shard-class/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ProductList: IProduct[] = [];
  constructor() {
    this.ProductList = [
      { ID: 1, Name: "Product1", Price: 1000, Quantity: 3, Image: '../../assets/images/products/bages-images/1.jpg', Discount: DiscountOffers.noDiscount,cateId:3 },
      { ID: 2, Name: "Product2", Price: 2000, Quantity: 5, Image: '../../assets/images/products/bages-images/2.jpg', Discount: DiscountOffers.fiveteen ,cateId:3},
      { ID: 3, Name: "Product3", Price: 3000, Quantity: 4, Image: '../../assets/images/products/bages-images/3.jpg', Discount: DiscountOffers.tenPercent,cateId:3 },
      { ID: 4, Name: "Product4", Price: 5000, Quantity: 4, Image: '../../assets/images/products/bages-images/4.jpg', Discount: DiscountOffers.fiveteen,cateId:3 },
      { ID: 5, Name: "Product5", Price: 7000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/1.jpg', Discount: DiscountOffers.tenPercent,cateId:2 },
      { ID: 6, Name: "Product6", Price: 8000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/2.jpg', Discount: DiscountOffers.fiveteen,cateId:2 },
      { ID: 7, Name: "Product7", Price: 2000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/3.jpg', Discount: DiscountOffers.noDiscount,cateId:2 },
      { ID: 8, Name: "Product8", Price: 4000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/4.jpg', Discount: DiscountOffers.fiveteen,cateId:2 },
      { ID: 9, Name: "Product4", Price: 5000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/5.jpg', Discount: DiscountOffers.fiveteen,cateId:3 },
      { ID: 10, Name: "Product5", Price: 7000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/6.jpg', Discount: DiscountOffers.tenPercent,cateId:2 },
      { ID: 11, Name: "Product6", Price: 8000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/7.jpg', Discount: DiscountOffers.fiveteen,cateId:2 },
      { ID: 12, Name: "Product7", Price: 2000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/8.jpg', Discount: DiscountOffers.noDiscount,cateId:2 },
      { ID: 13, Name: "Product8", Price: 4000, Quantity: 4, Image: '../../assets/images/products/mirrors-images/9.jpg', Discount: DiscountOffers.fiveteen,cateId:2 },
      { ID: 14, Name: "Product8", Price: 4000, Quantity: 4, Image: '../../assets/images/products/chairs-images/1.jpg', Discount: DiscountOffers.fiveteen,cateId:1 },
      { ID: 15, Name: "Product8", Price: 4000, Quantity: 4, Image: '../../assets/images/products/chairs-images/2.jpg', Discount: DiscountOffers.fiveteen,cateId:1 },
      { ID: 16, Name: "Product8", Price: 4000, Quantity: 4, Image: '../../assets/images/products/chairs-images/3.jpg', Discount: DiscountOffers.fiveteen,cateId:1 },
      { ID: 17, Name: "Product8", Price: 4000, Quantity: 4, Image: '../../assets/images/products/chairs-images/4.jpg', Discount: DiscountOffers.fiveteen,cateId:1 },
      { ID: 18, Name: "Product8", Price: 4000, Quantity: 4, Image: '../../assets/images/products/chairs-images/5.jpg', Discount: DiscountOffers.fiveteen,cateId:1},

    ]
   }

   getAllProdcts(){
    return this.ProductList;
   }
   getProductById(id:number)
   {
        let index:number=this.ProductList.findIndex(product=>product.ID==id);
        if(index==-1) return null;
        return this.ProductList[index];
   }

   getProductByCategoryId(cateId:number)
   {
      let productsList:IProduct[]=this.ProductList.filter(product=>product.cateId==cateId);
      return productsList;
   }
}
