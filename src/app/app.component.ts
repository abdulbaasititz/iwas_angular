import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppConstants} from "E:/iwas project/iwas/src/app/core/utils/AppConstants";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = AppConstants.routes;
  title = 'iwas';
  constructor(){
    //this.routes.navigate('');
  }
}
