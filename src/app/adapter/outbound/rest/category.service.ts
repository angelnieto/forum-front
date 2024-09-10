import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../../../domain/model/category';
import { environment } from 'src/environments/environment.local';
import { Observable } from 'rxjs';
import { ICategoryService } from 'src/app/port/outbound/rest/category.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements ICategoryService{

  public resourceUrl = environment.SERVER_API_URL + '/categories';

  constructor(protected http: HttpClient) { }

  save(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.resourceUrl}`, category);
  }

  getAll() {
    return this.http.get<ICategory[]>(`${this.resourceUrl}`);
  }

}
