import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  transverse=true;
  signIn(){
    this.transverse=false;
    console.log("hello")
  }
  signUp(){
    this.transverse=true;
    console.log("hello")
  }
}
