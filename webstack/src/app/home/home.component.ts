import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public content: Product;

  constructor() { }

  ngOnInit() {
    
  }

  handlerProduct(event: Product) {
    this.content = event;
  }
}
