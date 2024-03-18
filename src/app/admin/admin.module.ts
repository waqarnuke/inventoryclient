import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';



@NgModule({
  declarations: [
    CategoryComponent,
    EditCategoryComponent,
    ProductComponent,
    EditProductComponent,
    EditProductFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
