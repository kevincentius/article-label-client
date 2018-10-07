import { Question } from './question';
import { Injectable } from '@angular/core';

export interface UserData {
  email?: string,
  name: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private static API_URL = 'http://localhost:8080/';

  username: string;
  password: string;

  private questions: Question[];

  constructor() {

  }

  login(userData: UserData, onsuccess, onwrong, onerror) {
    let url = ArticleService.API_URL + "auth/login";
    this.post(url, userData, function(response) {
      if (response == true) {
        this.username = userData.name;
        this.password = userData.password;
        onsuccess();
      } else {
        onwrong();
      }
    }.bind(this), onerror);
  }

  logout() {
    this.username = null;
    this.password = null;
  }

  register(userData: UserData, onsuccess, onerror) {
    let url = ArticleService.API_URL + "auth/register";
    this.post(url, userData, function(response) {
      this.username = userData.name;
      this.password = userData.password;
      onsuccess();
    }.bind(this), onerror);
  }

  nextArticle(onsuccess, onerror) {
    let url = ArticleService.API_URL + "api/next-article";
    this.get(url, function(response) {
      onsuccess(response);
    }.bind(this), onerror);
  }

  getQuestions(): Question[] {
    return this.questions;
  }
  
  loadQuestions(onsuccess, onerror) {
    let url = ArticleService.API_URL + "api/labels";
    this.get(url, function(response) {
      this.questions = response;
      onsuccess(response);
    }.bind(this), onerror);
  }

  submitLabels(labels, onsuccess, onerror) {
    let url = ArticleService.API_URL + "api/submit";
    this.post(url, labels, onsuccess, onerror);
  }

  private get(url: string, onsuccess, onerror) {
    this.sendRequest(url, 'GET', null, onsuccess, onerror);
  }

  private post(url: string, data, onsuccess, onerror) {
    this.sendRequest(url, 'POST', data, onsuccess, onerror);
  }

  private sendRequest(url: string, method: string, data, onsuccess, onerror) {let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if (request.status === 200) {
          if (request.response) {
            onsuccess(JSON.parse(request.response));
          } else {
            onsuccess(null);
          }
        } else {
          onerror();
        }
      }
    }.bind(this);
    request.open(method, url, true);
    request.setRequestHeader("Content-Type", "application/json");
    if (this.username && this.password) {
      request.setRequestHeader("Username", this.username);
      request.setRequestHeader("Password", this.password);
    }
    request.send(JSON.stringify(data));
  }

}
