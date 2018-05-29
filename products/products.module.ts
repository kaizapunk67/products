import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import 'rxjs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
