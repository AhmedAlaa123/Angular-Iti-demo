import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../shard-class/ICateogry';
import { IProduct } from '../shard-class/IProduct';
import { ProductService } from '../Services/Product-service/product.service';
import { CategoryService } from '../Services/category-service/category.service';
//import { ProductCardComponent } from '../product-card/product-card.component';
import { DiscountOffers } from '../shard-class/DiscountOffers';
@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  
  ProductList: IProduct[] = [];
  CategoryList: ICategory[] = []
  selectedCategory: string = ''
  buyNow: boolean = false;
  personName:string=''
  product=null
  constructor(private productService: ProductService,private categoryService :CategoryService ) { }

  ngOnInit(): void {
    this.renderValues();
    this.product!=this.productService.getProductById(1);
  }

  private renderValues()
  {
    this.ProductList=this.productService.getAllProdcts();
    this.CategoryList=this.categoryService.getAllCategories()
  }
  handelChange(categorySelect: any) {
    if (categorySelect == '0') {
        this.selectedCategory = ''
        this.ProductList=this.productService.getAllProdcts();
    }
    else {
        let list = this.CategoryList.filter(category => category.ID == parseInt(categorySelect))
        this.selectedCategory = list.length > 0 ? list[0].Name : ''
        console.log(list, categorySelect)
        this.ProductList=this.productService.getProductByCategoryId(parseInt(categorySelect));
    }
  }

  handelBuyNow()
  {
    this.buyNow=true;
  }

}
