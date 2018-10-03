import { ArticleService } from './../service/article.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("btnLogin") private btnLogin;
  @ViewChild("btnRegister") private btnRegister;

  private inputName: string;
  private inputPassword: string;
  private inputEmail: string;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    console.log(this.btnLogin);
  }

  login() {
    console.log('login clicasdfked test');
  }

  register() {
    // TODO: disable buttons until response received
    this.articleService.register({
      email: this.inputEmail,
      name: this.inputName,
      password: this.inputPassword
    }, function() {
      console.log('Registered!');
    }.bind(this), function() {
      console.log('Failed!');
    }.bind(this));
  }

}
