import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public products: any;

  @Output()
  product: EventEmitter<Product> = new EventEmitter();

  constructor(private productService:ProductService, private http:HttpClient) { }

  ngOnInit() {
    this.productService.getProductByName().subscribe(
      result => {
        this.products = JSON.parse(result);
        let product = this.products.filter(product => {
          if(product.type === "常用推荐") {
            return product;
          }
        })
        console.log(product);
        this.product.emit(product);
      }
    );
  }

  clickItem(name: string) {
    this.productService.getProductByName().subscribe(
      result => {
        this.products = JSON.parse(result);
        let product = this.products.filter(product => {
          if(product.type === name) {
            return product;
          }
        })
        this.product.emit(product);
      }
    );
  }
}
