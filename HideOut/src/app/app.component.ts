import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HideOut';
  side=false;
  value=2;
  Open(){
    this.side=true;
    
  }
  Close(){
    this.side=false;
    console.log("hello");
  }
}
