import { Admin } from './../../models/admin.model';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss']
})
export class LoginDashboardComponent implements OnInit {


  mForm: FormGroup;
  isSend = false;



  constructor(private fb: FormBuilder, private router: Router, private adminService: AdminService,) {
    this.mForm = this.fb.group({
      adminID: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{6}\-LCA$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]{6,30}$'),
        ],
      ],
    });
  }

  ngOnInit() {}

  get f() {
    return this.mForm.controls;
  }

  sendData() {
    this.isSend = true;
    //console.log('Guardar!!', this.mForm);
    // console.log(this.f.email.errors)
    // console.log(this.f.password.errors)




    if (this.mForm.invalid) {
      console.error('El formulario NO es válido');
      return;
    } else {
      this.router.navigate(['/dashboard']);
      console.log('El formulario es válido');
    }


    //Hacer llamada al servicio
    //Dos servicios user y people
    const user: Admin = new Admin();
    user.adminID = this.f.adminID.value;
    user.password =  this.f.password.value;
    this.adminService.login(user).subscribe(
      (data: any) => {
        localStorage.setItem("token", data.access_token_admin)
        this.router.navigate(['/dashboard']);
        console.log(data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }


}
