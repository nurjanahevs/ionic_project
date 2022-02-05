import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private product: ProductsService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    return this.product.getProducts().subscribe((data) => {
      console.log(data);
    });
  }
}
