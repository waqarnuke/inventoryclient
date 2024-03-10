import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CategoryFormValues } from '../shared/models/category';





@Injectable({
  providedIn: 'root'
})
export class AdminService {
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

}
