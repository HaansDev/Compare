import { Laptop } from './../../models/laptop.model';
import { LaptopsService } from './../../services/laptops.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-detail-laptop',
  templateUrl: './detail-laptop.component.html',
  styleUrls: ['./detail-laptop.component.scss']
})
export class DetailLaptopComponent implements OnInit {

  constructor(private active: ActivatedRoute, private laptopsService: LaptopsService) { }


  laptop: Laptop = new Laptop();
  ngOnInit(): void {
      this.active.params.subscribe( params => {
      console.log(params.id);

        this.getLaptop(params.id)


    })
  }

  getLaptop(id: string){

    this.laptopsService.getLaptop(id).subscribe((data) => {
      console.log(data)
      this.laptop = data
    },
      error => {
        console.log("Error:", error);
      }
    );


  }

  formatDate(date?: any): string{
    return moment(date).format("DD/MM/YYYY")
  }
}
