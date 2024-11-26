import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootUrl = 'http://localhost:5000/api/users';
  constructor(private http: HttpClient, private router: Router) { }

  register(name: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(this.rootUrl + '/register', { name, email, password, role });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.rootUrl + '/login', { email, password });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
