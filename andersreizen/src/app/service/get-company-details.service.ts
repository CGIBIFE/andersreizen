import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetCompanyDetailsService {

  constructor(private httpClient:HttpClient) { }

  getCompanyDetails(): Observable<any> {

    return this.httpClient.get(`${window.location.origin}:8085/api/getCompanyAllDetails`)
        .pipe(
            catchError((e: any) =>{
              //do your processing here
              return throwError(e);
            })
        )
  }
}
