import { Router } from '@angular/router';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  
  constructor(private route:Router){}
  title = 'angular14';
  isMenuVisible=true;

  ngDoCheck(): void {
    const currentroute=this.route.url;
    if(currentroute=='/login'){
      this.isMenuVisible=false;
    }else{
      this.isMenuVisible=true;
    }
  }
}
