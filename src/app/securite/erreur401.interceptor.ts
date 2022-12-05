import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { ProfilsService } from '../intranet/services/profils.service';

@Injectable()
export class Erreur401Interceptor implements HttpInterceptor {

  constructor(private p:ProfilsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      erreur => {
        if (erreur instanceof HttpErrorResponse && erreur.status == 401) {
          this.p.deconnexion();
        }
        return erreur;
      }
    );
  }
}
