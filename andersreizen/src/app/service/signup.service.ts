import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) {

  }

  signup(signupFieds): Observable<any> {

    return this.httpClient.post(`${window.location.origin}:8085/api/auth/signup`,{...signupFieds, username:signupFieds.email})
  }
}
