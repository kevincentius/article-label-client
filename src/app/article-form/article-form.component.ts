import { Question, Choice } from './../service/question';
import { ArticleService } from './../service/article.service';
import { Component } from '@angular/core';
import { Article } from '../service/article';

interface QuestionInput {
  question: Question;
  value: number;
}

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {  

  private article: Article;
  private inputs: QuestionInput[];

  constructor(
    private articleService: ArticleService
  ) { }

  nextArticle() {
    this.articleService.nextArticle(this.showArticle.bind(this), this.showError.bind(this));
  }

  showArticle(article: Article) {
    // TODO: if article is null
    this.article = article;

    this.inputs = [];
    for (let question of this.articleService.getQuestions()) {
      this.inputs.push({
        question: question,
        value: null
      });
    }
  }

  showError() {
    console.log('TODO: show error');
  }

  select(inp: QuestionInput, choice: Choice) {
    console.log('selected', choice, inp);
    inp.value = choice.id;
  }

  submit() {
    if (this.validate()) {
      // TODO: disable inputs until next showArticle
      console.log('submit');
      let labels = [];
      for (let inp of this.inputs) {
        labels.push({
          question: inp.question.id,
          choice: inp.value
        });
      }

      let data = {
        article: this.article.id,
        labels: labels
      }

      this.articleService.submitLabels(data, this.showArticle.bind(this), function() {
        console.log('TODO: handle error');
      }.bind(this));
    }
  }

  private validate(): boolean {
    for (let inp of this.inputs) {
      if (!inp.value) {
        return false;
      }
    }
    return true;
  }

}
