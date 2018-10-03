import { ArticleService } from './service/article.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ArticleFormComponent } from './article-form/article-form.component';
import { InfoScreenComponent } from './info-screen/info-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleFormComponent,
    InfoScreenComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
