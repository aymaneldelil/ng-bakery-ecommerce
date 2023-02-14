import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ProductCardComponent],
})
export class ProductModule {}
