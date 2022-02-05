import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(user: any) {
    return this.http.post<any>(`${environment.baseUrl}users/user/login`, user);
  }
  registerUser(user: any) {
    return this.http.post<any>(`${environment.baseUrl}user/user/register`, user);
  }
}
