import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
    pageYoffset = 0;
    windowScrolled: boolean = false;
    constructor(private scroll: ViewportScroller) { }

    @HostListener('window:scroll', ['$event']) onScroll(event:any) {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop(){
        this.scroll.scrollToPosition([0,0]);
    }
    ngOnInit() {}

}
