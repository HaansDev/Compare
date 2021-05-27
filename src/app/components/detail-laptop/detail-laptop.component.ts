import { Laptop } from './../../models/laptop.model';
import { LaptopsService } from './../../services/laptops.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import * as moment from 'moment';
import { CompareService } from './../../services/comparison/compare.service';

@Component({
  selector: 'app-detail-laptop',
  templateUrl: './detail-laptop.component.html',
  styleUrls: ['./detail-laptop.component.scss']
})
export class DetailLaptopComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private router: Router, private active: ActivatedRoute, private laptopsService: LaptopsService, private CompareService: CompareService) { }


  laptop: Laptop = new Laptop();
  ngOnInit(): void {
      this.active.params.subscribe( params => {
      // console.log(params.id);

        this.getLaptop(params.id)


    })
  }

  getLaptop(id: string){

    this.laptopsService.getLaptop(id).subscribe((data) => {
      // console.log(data)
      this.laptop = data
    },
      error => {
        console.log("Error:", error);
      }
    );


  }

  idToCompare!: string;

  toCompare(laptop_id: any){


    // this.active.params.subscribe( value =>{
    //   this.idToCompare = value.id
    //   console.log(this.idToCompare)
    //  })
     // this.newItemEvent.emit(laptop_id);
  }

  addLaptop(id: string): void {

      this.laptopsService.getLaptop(id).subscribe((data) => {

        this.laptop = data
      },);
      this.CompareService.addLaptops(this.laptop)
  }
  formatDate(date?: any): string{
    return moment(date).format("DD/MM/YYYY")
  }
}


// Componente hijo del que se envie la información en este caso el laptop._id con la funcion toCompare
