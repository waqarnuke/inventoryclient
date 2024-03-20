import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../shared/models/category';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http:HttpClient) { }
 
   // product service
  getProducts(){
    return this.http.get<Product[]>(this.baseUrl + 'product/');
  }
}
