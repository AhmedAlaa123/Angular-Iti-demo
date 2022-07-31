import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/Product-service/product.service';
import { DiscountOffers } from '../shard-class/DiscountOffers';
import { IProduct } from '../shard-class/IProduct';

@Component({
  selector: 'app-products-without-discount',
  templateUrl: './products-without-discount.component.html',
  styleUrls: ['./products-without-discount.component.scss']
})
export class ProductsWithoutDiscountComponent implements OnInit {

  productsList:IProduct[]=[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
     this.productsList= this.productService.getAllProdcts().filter(product=>product.Discount==DiscountOffers.noDiscount);
  }

}
