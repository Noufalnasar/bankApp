import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegstrComponent } from './regstr/RegstrComponent';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  //dashboard
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'register',component:RegstrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
