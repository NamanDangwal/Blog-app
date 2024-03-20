import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { AboutComponent } from './shared/about/about.component';
import { TermsAndConditionComponent } from './shared/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'about', component:AboutComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'terms_and_condition',component:TermsAndConditionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
