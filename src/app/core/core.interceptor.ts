import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { credentialsRequest, environment } from 'src/environments/environment';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request_api = request.clone({
      params: (request.params ? request.params : new HttpParams()).appendAll(
        credentialsRequest
      ),
    });

    return next.handle(request_api);
  }
}

