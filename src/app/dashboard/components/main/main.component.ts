import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }
 public products: any = this.fechtProducts();
  ngOnInit(): void {
    this.fechtProducts();
  }

  fechtProducts(){
  return  this.productsService.getProducts();
  }

}
