import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sForm: FormGroup
  isSend = false

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.sForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,30}$")]],
      confirm_password: ['', [Validators.required]]
    },{validator: ConfirmedValidator('password', 'confirm_password')})
   }

  ngOnInit() {
  }

  get f(){
    return this.sForm.controls
  }

  sendEmailNewUser(){
  this.userService.sendEmailNewUser(this.sForm.value.email).subscribe(
    (data) => {
      console.log(data);

    },
    (error) => {
      console.log('Error:', error);
    }
  );
}

  saveData() {
    this.isSend = true
    console.log("Guardar!!", this.sForm);
    console.log(this.f.username.errors)
    console.log(this.f.email.errors)
    console.log(this.f.password.errors)

    if(this.sForm.invalid) {
      console.error("El formulario NO es válido");
      return
    } else{
      this.sendEmailNewUser()
      this.router.navigate(["/login"])
      console.log("El formulario es válido");
    }

    // const user: User = new User();
    // user.email = this.f.email.value;
    // user.password =  this.f.password.value;
    // this.userService.signup(user).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.router.navigate(['/login']);
    //   },
    //   (error) => {
    //     console.log('Error:', error);
    //   }
    // );

}

}
