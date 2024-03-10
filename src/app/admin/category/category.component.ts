import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Category } from '../../shared/models/category';
import { response } from 'express';





@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categories : Category[] = [];

  constructor(private adminService: AdminService){}

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories(){
    this.adminService.getCategories().subscribe({
      next : response => this.categories = response,
      error : err => console.log(err)
    })
  }
  Delete(id:number){
    if(confirm("Are yuou sure to delete")){
      console.log("Implement delete" + id);
      this.adminService.deleteCategory(id).subscribe((response:any) => {
        this.categories.splice(this.categories.findIndex(p => p.id === id), 1);
      })
    }
  }

}
