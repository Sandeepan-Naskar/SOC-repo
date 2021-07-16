import { Component, OnInit } from '@angular/core';

declare function comment() :any ;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onclick(): void{
    comment();
  }
}
