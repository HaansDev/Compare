import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    transparent: boolean = true
    sticky: boolean = false
    dark: boolean = false

    constructor(private router: Router) { }

    ngOnInit() {
    this.router.events.subscribe( route => {

      if(route instanceof NavigationEnd) {
        if(route.url == "/laptops") {
          this.transparent = false
          this.dark = true
        } else {
            this.transparent = true
            this.dark = false
        }
      }

    })
  }

    @HostListener('window:scroll', [])
      onWindowScroll() {
          if (window.scrollY > 100) {
              this.transparent = false
              this.sticky = true
          } else {
              this.sticky = false
              this.transparent = true
          }

      }

}
