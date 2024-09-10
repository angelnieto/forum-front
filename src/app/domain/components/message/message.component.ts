import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMessageService } from 'src/app/port/outbound/rest/message.service';
import { IMessage } from '../../model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  formulary: FormGroup;
  message: IMessage;
  category: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: IMessageService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.category = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  createForm() {
    this.formulary = this.fb.group({
      text: [null, Validators.required],
      author: [null, Validators.required]
    })
  }

  save(){
    this.message = {
      text: this.formulary.get(['text']).value,
      author:  this.formulary.get(['author']).value,
      category: this.category
    }
    this.service.save(this.message).subscribe(resp =>{
       this.router.navigate([`/category/${this.category}/messages`]);
     });
  }

  back(){
    this.router.navigate([`/category/${this.category}/messages`]);
  }

}
