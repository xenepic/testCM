import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HelloWorldPage } from './helloWorld';
import { HelloWorldPageRoutingModule } from './helloWorld-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloWorldPageRoutingModule
  ],
  declarations: [
    HelloWorldPage,
  ]
})
export class HelloWorldModule { }
