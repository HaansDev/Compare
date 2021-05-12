import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  admins = [
    {
      name: "Cristian",
      lastname: "Fernández",
      adminID: "00000001-LCA",
      email: "cristianfernandez@email.com"

    },
    {
      name: "Kiril",
      lastname: "Stefanov",
      adminID: "00000002-LCA",
      email: "kirilstefanov@email.com"
    },

    {
      name: "Jose",
      lastname: "Peño",
      adminID: "00000003-LCA",
      email: "josepeno@email.com"
    },
  ]

  isContact = false


  constructor() { }

  ngOnInit() {
  }

  openContact(){
    this.isContact = !this.isContact

  }

}
