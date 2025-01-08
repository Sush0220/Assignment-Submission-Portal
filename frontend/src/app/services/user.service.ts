import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rootUrl = 'https://submitease.onrender.com/api/users'
  constructor(private http: HttpClient) { }

  uploadAssignment(task: string, admin: string): Observable<any> {
    return this.http.post(this.rootUrl + '/upload', { task, admin });
  }

  getAdmins(): Observable<any> {
    return this.http.get(this.rootUrl + '/admins');
  }
}
