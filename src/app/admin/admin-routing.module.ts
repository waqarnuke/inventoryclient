import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  //{path:'', component:AdminComponent},
  {path:'category', component:CategoryComponent},
  {path:'create', component:EditCategoryComponent},
  {path:'edit/:id', component:EditCategoryComponent},
  {path:'product', component:ProductComponent},
  {path:'productcreate', component:EditProductComponent},
  {path:'productedit/:id', component:EditProductComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
