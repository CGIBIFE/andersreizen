import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

const urls = [
    {
        url: '/api/auth/signin',
        json: {
            "tokenType": "Bearer",
            "accessToken": "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
    }, {
        url: '/api/auth/signup',
        json: {
            "status": "SUCCESS",
            "comment": "Registration is successfull"
        }
    },
    {
        url: ' /api/saveCompanyDetails',
        json: {
            "introduction": {
                "companyId": 3,
                "companyName": "CGI",
                "email": "arul.natarajan@cgi.com",
                "telephone": "0613728903",
                "date": "2020-06-16",
                "companyType": "Banking",
                "location": "Utrecht",
                "averageFte": 9899.0,
                "travelAllowance": 343.0,
                "businessTrafficAllowance": 34.0,
                "carsAverage": 989,
                "description": "test",
                "filledByName": "Arulmozhimanikandan"
            }, "error": null
        }
    }, {
        url: ' /api/saveConsumptionData',
        json: {
            "status": "SUCCESS",
            "message": "Consumption details saved successfully."
        }
    }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const item of urls) {
            if (request.url.includes(item.url)) {
                return of(new HttpResponse({status: 200, body: item.json})).pipe(
                    delay(200)
                );
            }
        }
        return next.handle(request);
    }
}
