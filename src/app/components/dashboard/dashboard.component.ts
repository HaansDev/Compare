import { AdminService } from './../../services/admin.service';
import { Admin } from './../../models/admin.model';
import { AuthService } from './../../services/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLogin: Boolean = false
  currentAdmin = new Admin()

  constructor(private router: Router, public auth: AuthService, private adminService: AdminService) { }

  ngOnInit() {
    this.router.events.subscribe( route => {
      if (route instanceof NavigationEnd) {
        console.log(route.url)
      }
  })


  this.adminService.adminDetail().subscribe((data) => {

    this.currentAdmin = data.data

  },
    error => {
      console.log("Error:", error);
    }
  );

  // if (this.auth.isAuthenticated()) {
  //   this.isLogin = true
  //   const admin = localStorage.getItem('token')
  //   console.log(admin)
  //   this.currentAdmin = admin !== null ? JSON.parse(admin) : new Admin()

  // }

}

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/dashboardlogin']);
}

}
