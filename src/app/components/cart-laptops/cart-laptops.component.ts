import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-laptops',
  templateUrl: './cart-laptops.component.html',
  styleUrls: ['./cart-laptops.component.scss']
})
export class CartLaptopsComponent implements OnInit {

  @Input() newlaptop: any;
  constructor(private active: ActivatedRoute) {

    this.newlaptop =""
   }

  ngOnInit(): void {
  }

  probando(){
    console.log(this.newlaptop)
  }

  // idToCompare!: string;
  // toCompare(){


  //   this.active.params.subscribe( value =>{
  //     this.idToCompare = value.id
  //     console.log(this.idToCompare)
  //    })

  // }

}



// Componente hijo que recibe el dato newlaptop
