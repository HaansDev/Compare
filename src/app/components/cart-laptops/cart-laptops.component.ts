import { ActivatedRoute,  Router, NavigationEnd} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CompareService } from './../../services/comparison/compare.service';
import { Laptop } from '../../models/laptop.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-laptops',
  templateUrl: './cart-laptops.component.html',
  styleUrls: ['./cart-laptops.component.scss']
})
export class CartLaptopsComponent implements OnInit {
    listLaptops: Array<Laptop> = [];
    hidden: boolean = false
    empty: string = "No hay portátiles en la comparativa"

    alert!: boolean

    constructor(private active: ActivatedRoute, private router: Router, private CompareService: CompareService) { }

    ngOnInit(): void {
        this.CompareService.getLaptops$().subscribe(laptops => {
                this.listLaptops = laptops
                // console.log(this.listLaptops)
        })
        // this.router.events.subscribe( route => {
        //
        //   if(route instanceof NavigationEnd) {
        //     if(route.url == "/compare") {
        //       this.hidden = true
        //     } else {
        //         this.hidden = false
        //     }
        //   }
        //
        // })
    }


    compareLaptops() {


      if(this.listLaptops.length == 4){
      this.router.navigate(["compare/" + this.listLaptops[0]._id + "/" + this.listLaptops[1]._id + "/" + this.listLaptops[2]._id + "/" + this.listLaptops[3]._id])
      console.log(this.listLaptops)
      window.scroll(0, 0);

      this.alert = false
      }

      if(this.listLaptops.length == 3){
        this.router.navigate(["compare/" + this.listLaptops[0]._id + "/" + this.listLaptops[1]._id + "/" + this.listLaptops[2]._id ])
        console.log(this.listLaptops)
        window.scroll(0, 0);

        this.alert = false
      }

      if(this.listLaptops.length == 2){
        this.router.navigate(["compare/" + this.listLaptops[0]._id + "/" + this.listLaptops[1]._id  ])
        console.log(this.listLaptops)
        window.scroll(0, 0);

        this.alert = false
      }

      if(this.listLaptops.length <2 ){
        this.alert = false
        return

      }

      if(this.listLaptops.length > 4 ){
        this.alert = true
        return
      }

    }

    deleteLaptop(laptop: Laptop) {
        this.CompareService.delLaptops(laptop)
        if(this.listLaptops.length > 4 ){
          this.alert = true
          return
        } else{this.alert = false}



    }


}



// Componente hijo que recibe el dato newlaptop
