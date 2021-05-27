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
    listLaptops: Laptop[] = []
    hidden: boolean = false
    empty: string = "No hay portátiles en la comparativa"

    constructor(private active: ActivatedRoute, private router: Router, private CompareService: CompareService) { }

    ngOnInit(): void {
        this.CompareService.getLaptops$().subscribe(laptops => {
                this.listLaptops = laptops
                console.log(this.listLaptops)
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
    deleteLaptop(laptop: Laptop) {
        this.CompareService.delLaptops(laptop)
    }


}



// Componente hijo que recibe el dato newlaptop
