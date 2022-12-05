import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilsService } from '../intranet/services/profils.service';
import { NgIfContext } from '@angular/common';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  entetes:any;

  constructor(private p:ProfilsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.p.token) {
      this.entetes = {
        Headers : new HttpHeaders(
          {'Authorization' : 'Bearer ' + this.p.token}
        )
      };
      const httpToken = request.clone(this.entetes)
      return next.handle(httpToken)
    }
    return next.handle(request);
  }
}
