import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  list(): Observable<UserModel> {
    return this.http.get('/api/users');
  }
}