import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../Services/Product-service/product.service';
import { DiscountOffers } from '../shard-class/DiscountOffers';
import { IProduct } from '../shard-class/IProduct';

@Component({
  selector: 'app-products-width-discount',
  templateUrl: './products-with-discount.component.html',
  styleUrls: ['./products-with-discount.component.scss']
})
export class ProductsWithDiscountComponent implements OnInit {

  productsList:IProduct[]=[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsList=this.productService.getAllProdcts().filter(product=>product.Discount!=DiscountOffers.noDiscount);
  }

}
