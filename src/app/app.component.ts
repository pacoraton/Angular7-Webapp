import { Component } from '@angular/core';
import {global} from '../services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Productos Angular 7';

  public headcolor:string;


  constructor(){
    this.headcolor=global.header_color;
  }
}
