import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component :HomeComponent},
  {path:'shop',
    loadChildren:() => import('./shop/shop.module').then(m => m.ShopModule)},
  {path:'admin',
    loadChildren: () =>  import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
