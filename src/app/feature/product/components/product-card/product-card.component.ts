import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private produsctSVC: ProductService) {}

  ngOnInit(): void {}

  getProducts() {
    this.produsctSVC.getAllgoods().subscribe({
      next: (data) => {
        console.log('Iam in Subscribe');

        console.log(data);
      },
    });
  }
}
