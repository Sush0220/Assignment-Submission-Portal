import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authServive: AuthService, private router: Router) { }

  login(email: string, password: string) {
    this.authServive.login(email, password).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      if (res.user.role === "Admin") {
        alert("Admin logged in successfully!");
        this.router.navigate(['admin']);
      } else {
        alert("User logged in successfully!");
        this.router.navigate(['user']);
      }
    }, (err: any) => {
      alert("Login Failed! " + err.message);
    })
  }


}