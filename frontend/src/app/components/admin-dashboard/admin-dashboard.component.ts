import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  public assignments: any[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAssigments().subscribe((data: any) => {
      console.log(data);
      this.assignments = data;
    })
  }

  refreshAssignments() {
    this.adminService.getAssigments().subscribe((data: any) => {
      this.assignments = data;
    })
  }

  acceptAssignment(id: string) {
    this.adminService.acceptAssignment(id).subscribe(() => {
      this.refreshAssignments();
    })
  }

  rejectAssignment(id: string) {
    this.adminService.rejectAssignment(id).subscribe(() => {
      this.refreshAssignments();
    })
  }

}
