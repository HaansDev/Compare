import { Mail } from './../../../models/mail.model';
import { AdminService } from './../../../services/admin.service';
import { Admin } from './../../../models/admin.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {


  // admins = [
  //   {
  //     name: "Cristian",
  //     lastname: "Fernández",
  //     adminID: "00000001-LCA",
  //     email: "cristianfernandez@email.com"

  //   },
  //   {
  //     name: "Kiril",
  //     lastname: "Stefanov",
  //     adminID: "00000002-LCA",
  //     email: "kirilstefanov@email.com"
  //   },

  //   {
  //     name: "Jose",
  //     lastname: "Peño",
  //     adminID: "00000003-LCA",
  //     email: "josepeno@email.com"
  //   },
  // ]

  isContact = false;
  contactButton = true;
  admins: Array<Admin> = [];
  adminToContact: Admin = new Admin();
  currentAdmin = new Admin();

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAdmin();

    this.getAdmins();


  }

  openContact(admin: any) {
    this.isContact = true;
    this.adminToContact = admin;
  }

  closeContact() {
    this.isContact = false;
  }

  getAdmin() {
    this.adminService.adminDetail().subscribe(
      (data) => {
        this.currentAdmin = data.data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  getAdmins() {
    this.adminService.getAdmins().subscribe(
      (data: Admin[]) => {
        this.admins = data;
        // console.log(data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  newEmail: Mail = new Mail();

  sendEmailAdmins(subject: string, message: string) {
    this.newEmail.destination = this.adminToContact.email;
    this.newEmail.subject = subject;
    this.newEmail.message = message;

    console.log(this.newEmail);
    this.adminService.sendEmailAdmins(this.newEmail.destination, subject, message).subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
