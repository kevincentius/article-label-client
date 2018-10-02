import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("inpName") private inpName;
  @ViewChild("inpPassword") private inpPassword;
  @ViewChild("inpEmail") private inpEmail;

  @ViewChild("btnLogin") private btnLogin;
  @ViewChild("btnRegister") private btnRegister;

  constructor() { }

  ngOnInit() {
    console.log(this.btnLogin);
  }

  login() {
    console.log('login clicked');
  }

  register() {
    
  }

}
