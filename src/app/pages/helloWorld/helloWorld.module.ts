import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HelloWorldPage } from './helloWorld';
import { HelloWorldPageRoutingModule } from './helloWorld-routing.module';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloWorldPageRoutingModule,
    TreeModule.forRoot()
  ],
  declarations: [
    HelloWorldPage,
  ]
})
export class HelloWorldModule { }
