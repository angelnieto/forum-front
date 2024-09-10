import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategory } from "src/app/domain/model/category";

@Injectable()
export abstract class ICategoryService {

  abstract getAll(): Observable<ICategory[]>;

  abstract save(category: ICategory): Observable<ICategory>;
}