import { Component, OnInit } from '@angular/core';
import { ProductFormValues } from '../../shared/models/product';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../shared/models/category';
import { forkJoin } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {
  
  product : ProductFormValues;
  categories : Category[] = [];

  constructor(private adminService:AdminService ,private router: Router, 
      private route:ActivatedRoute, 
      private tastr : ToastrService){
    this.product = new ProductFormValues(); 
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    this.adminService.getCategories().subscribe({
      next : response => this.categories = response,
      error : err => console.log(err)
    });
    
    const id = this.route.snapshot.paramMap.get('id')
    if(id) this.adminService.getProductById(+id).subscribe((response:any) => {
      this.product = {...response};
    })
  }

  loadProduct(){
    const id = this.route.snapshot.paramMap.get('id')
    if(id) this.adminService.getProductById(+id).subscribe((response:any) => {
      this.product = {...response};
    })
  }

}
