import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products : Product[] = [];

  constructor(private adminService: AdminService){}
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.adminService.getProducts().subscribe({
      next : response => this.products = response,
      error : err => console.log(err)
    })
  }

  Delete(id:number){
    if(confirm("Are yuou sure to delete")){
      console.log("Implement delete" + id);
      this.adminService.deleteProduct(id).subscribe((response:any) => {
        this.products.splice(this.products.findIndex(p => p.id === id), 1);
      })
    }
  }
}
