import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5000/api';

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Category[]>(this.baseUrl + 'category');
  }
}
