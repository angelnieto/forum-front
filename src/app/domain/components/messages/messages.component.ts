import { Component, OnInit } from '@angular/core';
import { IMessage } from '../../model/message';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMessageService } from 'src/app/port/outbound/rest/message.service';
import { ICategory } from '../../model/category';
import { ICategoryService } from 'src/app/port/outbound/rest/category.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: IMessage[] = [];
  category: ICategory;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messagesService: IMessageService,
    private categoryService: ICategoryService
  ) { }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.categoryService.getAll().subscribe(resp => {
      const category = resp.filter(c => c.id === id);
      if(category){
        this.category = category[0];

        this.loadAll();
      }
    })

  }

  loadAll(){
    this.messagesService.getAll(this.category.id).subscribe(resp => {
      this.messages = resp;
    });
  }

  newMessage(){
    this.router.navigate([`/category/${this.category.id}/message`]);
  }
}
