import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UpdateCompanyDetailsService {

  constructor(private httpClient:HttpClient) { }

  updateCompanyDetails(companyProfile, id): Observable<any> {

    return this.httpClient.put(`${window.location.origin}:8085/api/updateCompanyDetails/${id}`,{...companyProfile})
        .pipe(
            catchError((e: any) =>{
              //do your processing here
              return throwError(e);
            })
        )
  }
}
