import { Component } from '@angular/core';

declare function home() :any ;
declare function abt() :any ;
declare function int() :any ;
declare function res() :any ;
declare function sugg() :any ;
declare function op() :any ;
declare function auto() :any ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';
  constructor(){
    auto();
  }
  onclick(): void{
    home();
    abt();
    int();
    res(); 
    sugg(); 
    op();
  }
}
