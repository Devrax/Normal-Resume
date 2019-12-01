import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {IUser, IRepo} from '../models/interfaces.types';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class MyGitService {
  // the loading uses this boolean directly
  public mainLoading = false;
  public counter = 0;

  private baseUrl = 'https://api.github.com';

  // You must to specify your user in order to located your info
  private who = 'devrax';

  constructor(public http: HttpClient) { }

  /**
   * This function is the one who makes the http get requets
   */
  httpGet(endpoint: string, params?: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}${params ? params : ''}`).pipe(
      catchError(() => {
        this.alert("Error", 'I cannot established a communication with Github\'s api', 'error');
        return throwError("Fatal, no hay conexion a github");
      })
    )
  }

  // this function is responsable to prepare the endpoint to get the user and returns that data
  getUser(): Observable<IUser> {
    return this.httpGet('users', `/${this.who}`);
  }

  // this function is responsable to prepare the endpoint to get the user's repository and returns that data
  getUserRepos(): Observable<IRepo[]> {
    return this.httpGet('users', `/${this.who}/repos`);
  }

  /**
   * As far as my ideas lets me think in another solution to stop the loader,
   * this function stop the mainLoading when the two http get request are done
   * actually theres are only two get request, so the limiter is two.
   */
  stopLoading() {
    this.counter++;
    if(this.counter === 2) {
      setTimeout(() => {
        this.mainLoading = true;
      }, 1000);
    }
  }

  //Custom alert
  alert(title: string, msg: string, type) {
    Swal.fire(
      title,
      msg,
      type
    );
  }

}
