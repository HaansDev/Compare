import { LaptopsService } from './../../services/laptops.service';
import { ActivatedRoute,  Router, NavigationEnd} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Laptop } from '../../models/laptop.model';
import { CompareService } from './../../services/comparison/compare.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compare-laptops',
  templateUrl: './compare-laptops.component.html',
  styleUrls: ['./compare-laptops.component.scss']
})
export class CompareLaptopsComponent implements OnInit {
  listaLaptops: Array<Laptop> = [];
  laptop: Laptop = new Laptop();
  data!: any;
  constructor(private active: ActivatedRoute, private router: Router, private CompareService: CompareService, private laptopsService: LaptopsService) { }

  ngOnInit(): void {
    this.active.params.subscribe( params => {
      this.data = params
    })

    console.log(this.data);

    if(this.data.id1)
    {this.getLaptop(this.data.id1)}

    if(this.data.id2)
    {this.getLaptop(this.data.id2)}

    if(this.data.id3)
    {this.getLaptop(this.data.id3)}

    if(this.data.id4)
    {this.getLaptop(this.data.id4)}

    console.log(this.listaLaptops)

}
  getLaptop(id: string){
    this.laptopsService.getLaptop(id).subscribe((data) => {
      // console.log(data)
      this.laptop = data
      this.listaLaptops.push(this.laptop)
      console.log(this.laptop)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  formatDate(date?: any): string{
    return moment(date).format("DD/MM/YYYY")
  }
  
  closeCompare() {
      this.router.navigate(["/"])
  }

}
