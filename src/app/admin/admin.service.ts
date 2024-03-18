import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CategoryFormValues } from '../shared/models/category';
import { Product, ProductFormValues } from '../shared/models/product';





@Injectable({
  providedIn: 'root'
})
export class AdminService {
  readonly PhotoUrl = 'http://localhost:5000/Content/images/products/'
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>('http://localhost:5000/api/category');
  }
  getCategoryById(id:number){
    return this.http.get<Category>(this.baseUrl + 'category/' + id);
  }
  createCategory(category:CategoryFormValues){
    return this.http.post(this.baseUrl + 'category', category);
  }
  udpateCategory(category:CategoryFormValues){
    return this.http.put(this.baseUrl + 'category/', category);
  }
  deleteCategory(id:number){
    return this.http.delete(this.baseUrl + 'category/?id=' + id);
  }

  // product service
  getProducts(){
    return this.http.get<Product[]>(this.baseUrl + 'product/');
  }
  getProductById(id:number){
    return this.http.get<Product>(this.baseUrl + 'product/' + id);
  }
  createProduct(product:ProductFormValues){
    return this.http.post(this.baseUrl + 'product', product);
  }
  udpateProduct(product:ProductFormValues,id:number){
    return this.http.put(this.baseUrl + 'product/' + id, product);
  }
  deleteProduct(id:number){
    return this.http.delete(this.baseUrl + 'product/' + id);
  }

  uploadPhoto(val : any){
    return this.http.post(this.baseUrl + 'product/savefile', val,{responseType: 'text' });
  }
}
