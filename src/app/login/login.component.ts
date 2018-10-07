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

  // angular models
  public enabled = true;
  public message = 'Please login';

  constructor(
    private articleService: ArticleService
  ) { }

  login() {
    this.enabled = false;
    this.articleService.login({
      name: this.inputName,
      password: this.inputPassword
    }, this.onLogin, function() {
      this.enabled = true;
      this.message = "Wrong credentials.";
    }.bind(this), function() {
      this.enabled = true;
      this.message = "An unexpected error has occurred.";
    }.bind(this));
  }

  register() {
    this.enabled = false;
    this.articleService.register({
      email: this.inputEmail,
      name: this.inputName, 
      password: this.inputPassword
    }, this.onLogin, function() {
      this.enabled = true;
      this.message = "An unexpected error has occurred.";
    }.bind(this));
  }

  reset() {
    this.message = 'Please login';
    this.enabled = true;
    this.inputName = '';
    this.inputPassword = '';
    this.inputEmail = '';
  }

}
