import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {IUser, IRepo} from '../models/interfaces.types';

@Injectable({
  providedIn: 'root'
})
export class MyGitService {
  private mainLoading = false;
  public counter = 0;

  private baseUrl = 'https://api.github.com';
  private who = 'devrax';

  constructor(public http: HttpClient) { }

  httpGet(endpoint: string, params?: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}${params ? params : ''}`);
  }

  getUser(): Observable<IUser> {
    return this.httpGet('users', `/${this.who}`);
  }

  getUserRepos(): Observable<IRepo[]> {
    return this.httpGet('users', `/${this.who}/repos`);
  }

  stopLoading() {
    this.counter++;
    if(this.counter === 2) {
      this.mainLoading = true;
    } 
  }

}
