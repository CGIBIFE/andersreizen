import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) {

  }
  login(credentials): Observable<any> {

      return this.httpClient.post(`${window.location.origin}:8085/api/auth/signin`,{...credentials})
          .pipe(
              catchError((e: any) =>{
                //do your processing here
                return throwError(e);
              })
          )
  }

}
