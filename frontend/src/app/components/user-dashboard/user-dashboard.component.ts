import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {

  public admins: any[] = [];
  public task: string = '';
  public selectedAdmin: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdmins().subscribe((data: any[]) => {
      this.admins = data;
    })
  }

  submitAssignment() {
    this.userService.uploadAssignment(this.task, this.selectedAdmin).subscribe(() => {
      alert("Assignment uploaded successfully!"),
        (err: any) => {
          alert("Assignment upload failed! " + err.message);
        }
    })
  }

}
