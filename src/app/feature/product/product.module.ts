import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
AngularMaterialModule

  ],
  exports:[
    ProductCardComponent
  ]
})
export class ProductModule { }
