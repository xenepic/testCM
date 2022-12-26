import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-helloWorld',
  templateUrl: 'helloWorld.html',
  styleUrls: ['./helloWorld.scss'],
})
export class HelloWorldPage {
  constructor(
    public router: Router,
    public userData: UserData
  ) { }
}
