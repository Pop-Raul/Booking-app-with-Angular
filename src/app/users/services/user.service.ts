import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { APIEndpointURLs } from '../../api-endpoint-urls';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // readonly rootUrl = 'http://localhost:8080/java-api/api';

  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(APIEndpointURLs.allUser);
  }
}
