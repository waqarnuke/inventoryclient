import { Component, Input, OnInit } from '@angular/core';
import { ProductFormValues } from '../../shared/models/product';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../shared/models/category';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrl: './edit-product-form.component.scss'
})
export class EditProductFormComponent implements OnInit {

  @Input() product : ProductFormValues;
  @Input() categories : Category[] = [];

  photofilepath : string = "";
  photoFileName : string ="0;"

  constructor(private adminService:AdminService ,private router: Router, 
    private route:ActivatedRoute, 
    private tastr : ToastrService){
      this.product = new ProductFormValues();

    }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(!id)
    {
      this.photofilepath = this.adminService.PhotoUrl + "placeholder.jpg";
    }
    
    console.log(this.photofilepath)
  }
  
  onSubmit(product:ProductFormValues){
    const id = this.route.snapshot.paramMap.get('id')
    if(id)
    {
      product.imageUrl = this.photoFileName;
      const newproduct = {...product};
      console.log(newproduct);
      const updateProduct = {...this.product, ...product};
      if(id)this.adminService.udpateProduct(updateProduct,+id).subscribe( (response:any) =>{
        this.tastr.success("New Category have been udpated.")
        this.router.navigate(['/admin/product']);
      })
      console.log(this.route.snapshot.url[0].path);
    }
    else{
        product.imageUrl = this.photoFileName;
        const newproduct = {...product};
        console.log(newproduct);
        //this.router.navigate(['/admin/product']);
        this.adminService.createProduct(newproduct).subscribe( (response:any) => {
          this.tastr.success("New Product have been added.");
          this.router.navigate(['/admin/product']);
      })
    }
  }

  onUpload(event:any)
  {
    var file = event.target.files[0];
    const formData : FormData = new FormData();
    formData.append('uploadFile', file,file.name);

    this.adminService.uploadPhoto(formData).subscribe((response:any) => {
      this.photoFileName = response;
      this.product.imageUrl = "";
      this.photofilepath = "" ;
      this.photofilepath = this.adminService.PhotoUrl + this.photoFileName;
      
      console.log(this.photofilepath )
    } )
  }
}
