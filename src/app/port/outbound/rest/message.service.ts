import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMessage } from "src/app/domain/model/message";

@Injectable()
export abstract class IMessageService {

  abstract getAll(category: number): Observable<IMessage[]>;

  abstract save(message: IMessage): Observable<IMessage>;
}