import { Laptop } from './../../models/laptop.model';
import { LaptopsService } from './../../services/laptops.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, private laptopsService: LaptopsService) {}

    ngOnInit(): void {
      this.getSixLaptops()
    }

    search(searchValue: string){


      if(searchValue == ""){
        this.router.navigate(["/laptops"])
      } else{
      this.router.navigate(["/laptops"], {queryParams: {filter: searchValue}})}


    }

    detailLaptop(id: any) {
      this.router.navigate(["laptop/" + id ])
      window.scroll(0, 0);
    }

    bestLaptops: Array<Laptop> = [];
    getSixLaptops() {

    this.laptopsService.getBestLaptops().subscribe(
      (data: Laptop[]) => {
        this.bestLaptops = data;
        console.log(data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }



}
