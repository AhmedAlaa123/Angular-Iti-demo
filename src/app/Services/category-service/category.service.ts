import { Injectable } from '@angular/core';
import { ICategory } from 'src/app/shard-class/ICateogry';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  CategoryList:ICategory[]=[];
 
  constructor() {
    this.CategoryList = [
      { ID: 1, Name: "Chairs" },
      { ID: 2, Name: "Mirrors" },
      { ID: 3, Name: "Bages" },
    ]
   }

   public getAllCategories()
   {
      return this.CategoryList;
   }
   public getCateogryById(id:number)
   {
        let index:number=this.CategoryList.findIndex(category=>category.ID==id);
        if(index==-1) return null;
        return this.CategoryList[index];
   }
}
