import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products : Product[] = [];

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.shopService.getProducts().subscribe({
      next : response => this.products = response,
      error : err => console.log(err)
    })
  }
}
