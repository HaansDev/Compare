import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    transparent: boolean = false
    sticky: boolean = false
    dark: boolean = true

    constructor(private activateRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
    this.router.events.subscribe( route => {

      if(route instanceof NavigationEnd) {
        if(route.url == "/") {
          this.transparent = true
          this.dark = false
        } else {
            this.transparent = false
            this.dark = true
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


      toLogin(){

        this.router.navigate(["/login"])
      }

}
