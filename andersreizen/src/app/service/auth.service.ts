import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public removetoken(): void {
    localStorage.removeItem('token')
  }
}
