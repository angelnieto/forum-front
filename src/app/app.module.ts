import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './domain/components/categories/categories.component';
import { CategoryService } from './adapter/outbound/rest/category.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './domain/components/category/category.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { ICategoryService } from './port/outbound/rest/category.service';
import { MessagesComponent } from './domain/components/messages/messages.component';
import { MessageComponent } from './domain/components/message/message.component';
import { IMessageService } from './port/outbound/rest/message.service';
import { MessageService } from './adapter/outbound/rest/message.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [
    { provide: ICategoryService, useClass: CategoryService },
    { provide: IMessageService, useClass: MessageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
