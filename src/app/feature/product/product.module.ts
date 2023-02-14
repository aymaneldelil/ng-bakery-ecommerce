import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductService } from './services/product.service';
import { FirestoreModule } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    ProductCardComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, FirestoreModule],
  exports: [ProductCardComponent],
  providers: [ProductService],
})
export class ProductModule {}
