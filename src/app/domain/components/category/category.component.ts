import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from '../../model/category';
import { ICategoryService } from 'src/app/port/outbound/rest/category.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryValidator } from './category.validator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  formulary: FormGroup;
  category: ICategory;
  categories: ICategory[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ICategoryService
  ) {
      this.createForm();
  }

  ngOnInit() {  }

  createForm() {
    this.formulary = this.fb.group({
      description: [null, [Validators.required], [CategoryValidator.checkIfUnique(this.service)]]
    })
  }

  save(){
      this.category = {
          description : this.formulary.get(['description']).value
      }
      this.service.save(this.category).subscribe(resp =>{
           this.router.navigate(['/categories']);
      });
  }

}
