import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { UsersComponent } from './Users/users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'notes',component:NotesComponent},
  {path:'posts/:id/comment',component:CommentsPageComponent},
  {
    path:'products',
    component:ProductContainerComponent,
    children:[
      {
        path:'withDiscount',
        component:ProductsWithDiscountComponent
      },
      {
        path:'withoutDiscount',
        component:ProductsWithoutDiscountComponent
      }
    ]
  },
  {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
  {path:'login2',component:Login2Component},
   {path:'register2',component:Register2Component},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
