import { Component, OnInit } from '@angular/core';
import { CategoryFormValues } from '../../shared/models/category';
import { AdminService } from '../admin.service';
import { response } from 'express';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss'
})
export class EditCategoryComponent implements OnInit {
  
  category : CategoryFormValues;

  constructor( private adminService : AdminService, private router: Router, 
      private route:ActivatedRoute, private tastr : ToastrService ){
    this.category = new CategoryFormValues();
  }
  ngOnInit(): void {
    if(this.route.snapshot.url[0].path == 'edit'){
      this.loadCategory();
    }
  }

  loadCategory(){
    const id = this.route.snapshot.paramMap.get('id')
    if(id) this.adminService.getCategoryById(+id).subscribe((response:any) => {
      this.category = {...response};
    })
    console.log(this.category);
  }

  onSubmit(category:CategoryFormValues){
    if(this.route.snapshot.url[0].path == 'edit'){
      const updateCategory = {...this.category, ...category};
      this.adminService.udpateCategory(updateCategory).subscribe( (response:any) =>{
        this.tastr.success("New Category have been udpated.")
        this.router.navigate(['/admin/category']);
      })
      console.log(this.route.snapshot.url[0].path);
    }
    else{
      const newCategory = {...category};
      console.log(newCategory);
      this.adminService.createCategory(newCategory).subscribe( (response:any) => {
      this.tastr.success("New Category have been added.")
      this.router.navigate(['/admin/category']);
    })
    }
  }

  

}
