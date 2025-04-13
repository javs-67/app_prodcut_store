import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductsComponent } from './screens/products/products.component';
import { ProductDetailsComponent } from './screens/product-details/product-details.component';
import { CartComponent } from './screens/cart/cart.component';
import { AboutComponent } from './screens/about/about.component';

const routes: Routes = [
  {path: '', component:HomeComponent ,pathMatch:'full'},
  {path: 'products', component:ProductsComponent ,pathMatch:'full'},
  {path: 'product/:id', component:ProductDetailsComponent ,pathMatch:'full'},
  {path: 'cart', component:CartComponent ,pathMatch:'full'},
  {path: 'about', component:AboutComponent ,pathMatch:'full'},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
