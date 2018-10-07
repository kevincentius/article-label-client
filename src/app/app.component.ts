import { ArticleService } from './service/article.service';
import { ArticleFormComponent } from './article-form/article-form.component';
import { LoginComponent } from './login/login.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { InfoScreenComponent } from './info-screen/info-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("login") private login: LoginComponent;
  @ViewChild("infoScreen") private infoScreen: InfoScreenComponent;
  @ViewChild("articleForm") private articleForm: ArticleFormComponent;

  screen = "login";

  constructor(
    private articleService: ArticleService
  ) { }

  ngAfterViewInit(): void {
    this.login.onLogin = this.onLogin.bind(this);
    this.articleForm.onBack = this.onBack.bind(this);
  }

  onLogin() {
    this.articleService.loadQuestions(function() {
      this.screen = "info";
      this.infoScreen.load(this.enterArticle.bind(this));
    }.bind(this), function() {
      console.log('TODO: handle error');
    }.bind(this));
  }

  onBack() {
    this.screen = "info";
  }

  enterArticle() {
    this.screen = "article";
    this.articleForm.nextArticle();
  }

} 