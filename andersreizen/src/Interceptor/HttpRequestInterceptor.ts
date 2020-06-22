import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthService} from "../app/service/auth.service";
import {delay} from "rxjs/operators";
const urls = ['/api/auth/signin','/api/auth/signup' ]
@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, public auth: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let requestUrl = new URL(request.url);

            if (urls.includes(requestUrl.pathname)) {
                request = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json'
                    }
                })
            }else {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${JSON.parse(this.auth.getToken()).accessToken}`,
                        'Content-Type': 'application/json'
                    }
                })
            }

            return next.handle(request);

    }
}
