import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  content: Product;

  public title:string;

  constructor() { }

  ngOnInit() {
    
  }

}
