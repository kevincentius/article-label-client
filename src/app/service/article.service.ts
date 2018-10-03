import { Injectable } from '@angular/core';

export interface UserData {
  email: string,
  name: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private static API_URL = 'http://localhost:8080/';

  private username: string;
  private password: string;

  constructor() {

  }

  register(userData: UserData, onsuccess, onfailed) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if (request.status === 200) {
          this.username = userData.name;
          this.password = userData.password;
          onsuccess();
        } else {
          onfailed();
        }
      }
    }.bind(this);

    let url = ArticleService.API_URL + "auth/register";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(userData));
  }

}
