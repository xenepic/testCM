import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldPage } from './helloWorld';

const routes: Routes = [
  {
    path: '',
    component: HelloWorldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloWorldPageRoutingModule { }
