import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headername="Angular tutorial 14";

  salary = 0.35;

  isdisabled=false;
  
  colorname="blue";
  font='40px';
 
  classname='headclass';
  stylevalue={"color":"green","font-size":"50px"};

  colors=['gold','black','brown','purple','orange']

  ngOnInit(): void {
  }

  Functionclick(name:string){
    alert(name)
  }

}
