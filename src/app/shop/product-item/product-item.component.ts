import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductCls } from '../../shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {

  @Input() product? : any;
  
  constructor(){
  }
  ngOnInit(): void {
  }
}
