import { Question } from './../service/question';
import { ArticleService } from './../service/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.css']
})
export class InfoScreenComponent {

  private questions: Question[];
  private onContinue = () => {};

  constructor(
    private articleService: ArticleService
  ) { }

  load(onContinue) {
    this.questions = this.articleService.getQuestions();
    this.onContinue = onContinue;
  }

}
