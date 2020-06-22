import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {


  constructor(private httpClient:HttpClient) { }

  createProfile(companyProfile): Observable<any> {

    return this.httpClient.post(`${window.location.origin}:8085/api/saveCompanyDetails`,{...companyProfile})
        .pipe(
            catchError((e: any) =>{
              //do your processing here
              return throwError(e);
            })
        )
  }
}
