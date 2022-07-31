import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersoneDetailsComponent } from './persone-details/persone-details.component';
import { HomeComponent } from './Home/home.component';
import { UsersComponent } from './Users/users.component';

import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { Login2Component } from './login2/login2.component';
import { NotesComponent } from './notes/notes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    ProductContainerComponent,
    ProductCardComponent,
    PersoneDetailsComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponent,
    CommentsPageComponent,
    ProductsWithDiscountComponent,
    ProductsWithoutDiscountComponent,
    LoginComponent,
    RegisterComponent,
    Register2Component,
    Login2Component,
    NotesComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
