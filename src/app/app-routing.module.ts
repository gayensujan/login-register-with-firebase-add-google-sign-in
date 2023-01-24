import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshboardComponent } from './component/deshboard/deshboard.component';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';



const routes: Routes = [
{
  path:'',redirectTo:'login',pathMatch:'full'
},
{
  path:'login',component:LoginComponent
},
{
  path:'register',component:RegisterComponent
},
{
  path:'deshboard',component:DeshboardComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
