import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';

import {CustomerChildComponent} from './customer-list/customer-child/customer-child.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
   {
    path: 'customer-child',
    component: CustomerChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomersRoutingModule { }
