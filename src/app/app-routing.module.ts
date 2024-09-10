import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './domain/components/categories/categories.component';
import { CategoryComponent } from './domain/components/category/category.component';
import { MessagesComponent } from './domain/components/messages/messages.component';
import { MessageComponent } from './domain/components/message/message.component';

const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:id/messages', component: MessagesComponent},
  {path: 'category/:id/message', component: MessageComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'categories'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
