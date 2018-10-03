import { ArticleService } from './../service/article.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild("btnLogin") private btnLogin;
  @ViewChild("btnRegister") private btnRegister;

  private inputName: string;
  private inputPassword: string;
  private inputEmail: string;

  public onLogin = () => {};

  constructor(
    private articleService: ArticleService
  ) { }

  login() {
    // TODO: disable buttons until response received
    this.articleService.login({
      name: this.inputName,
      password: this.inputPassword
    }, function() {
      this.onLogin();
    }.bind(this), function() {
      console.log('Login failed');
    }.bind(this));
  }

  register() {
    // TODO: disable buttons until response received
    this.articleService.register({
      email: this.inputEmail,
      name: this.inputName, 
      password: this.inputPassword
    }, function() {
      this.onLogin();
    }.bind(this), function() {
      console.log('Failed!');
    }.bind(this));
  }

}
