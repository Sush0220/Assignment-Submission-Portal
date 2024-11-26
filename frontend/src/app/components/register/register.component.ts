import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) { }

  register(name: string, email: string, password: string, role: string) {
    this.authService.register(name, email, password, role).subscribe(() =>
      alert("User registered successfully!"),
      (err: any) => {
        alert("Registration Failed! " + err.message);
      });
  }

}
