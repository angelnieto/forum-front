import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../../../domain/model/category';
import { environment } from 'src/environments/environment.local';
import { Observable } from 'rxjs';
import { ICategoryService } from 'src/app/port/outbound/rest/category.service';
import { IMessageService } from 'src/app/port/outbound/rest/message.service';
import { IMessage } from 'src/app/domain/model/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService implements IMessageService{

  public resourceUrl = environment.SERVER_API_URL + '/messages';

  constructor(protected http: HttpClient) { }

  save(message: IMessage): Observable<IMessage> {
    return this.http.post<IMessage>(`${this.resourceUrl}`, message);
  }

  getAll(category: number) {
    const params = new HttpParams().set('category', String(category));
    return this.http.get<IMessage[]>(`${this.resourceUrl}`, {params: params});
  }

}
