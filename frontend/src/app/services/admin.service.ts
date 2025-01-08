import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private rootUrl: string = 'https://submitease.onrender.com/api/admins';
  constructor(private http: HttpClient) { }

  getAssigments(): Observable<any> {
    return this.http.get(this.rootUrl + '/assignments');
  }

  acceptAssignment(id: string): Observable<any> {
    return this.http.put(this.rootUrl + '/assignments/' + id + '/accept', {});
  }

  rejectAssignment(id: string): Observable<any> {
    return this.http.put(this.rootUrl + '/assignments/' + id + '/reject', {});
  }


}
