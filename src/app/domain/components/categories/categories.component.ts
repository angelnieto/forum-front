import { Component, OnInit } from '@angular/core';
import { Category, ICategory } from '../../model/category';
import { CategoryService } from 'src/app/adapter/outbound/rest/category.service';
import { Params, Router } from '@angular/router';
import { ICategoryService } from 'src/app/port/outbound/rest/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  
  categories: ICategory[] = [];

  constructor(
    private service: ICategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.service.getAll().subscribe(resp => {
      this.categories = resp;
    });
  }

  getMessages(category: number){
    this.router.navigate([`/category/${category}/messages`]);
  }
}
