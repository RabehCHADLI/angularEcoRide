import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from './user';
import { ILoginresponse } from './response-api/auth-response';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8000/api/'
  constructor(private hpptclient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }
  // submitLogin(email: string, password: string): Observable<User[]> {
  //   let datafetch = {
  //     email: email,
  //     password: password
  //   }
  //   return this.hpptclient.post<User[]>(this.url + 'login',
  //     datafetch
  //   ).pipe(tap((response: object) => {
  //     console.log(response);
  //   }))
  // }
  login(email: string, password: string): Observable<ILoginresponse> {
    return this.hpptclient.post<ILoginresponse>(`${this.url}login`, {
      email: email,
      password: password
    });

  }
  async setToken(token: string, user: User) {
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  getToken(): string {
    return sessionStorage.getItem('token')!
  }
  getUser() {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(sessionStorage.getItem('user')!)
    }
  }

  logout() {
    sessionStorage.setItem('token', '')
    sessionStorage.setItem('user', '')
  }
}

