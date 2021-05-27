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
    // this.CompareService.getLaptops$().subscribe(laptops => {
    //         this.listaLaptops = laptops
    //         // console.log(this.listLaptops)
    // })
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





  // laptops = [
  //     {
  //     image: "../../../../assets/images/laptop1.jpg",
  //     brand: "Asus",
  //     model: "Inspire+",
  //     price: 1000,
  //     fabric_date: "20/12/2021",
  //     cpu: "Intel Core i5-10210U",
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: "DDR4 5DRAM",
  //     ram_speed: 2800,
  //     ram_size: 16,laptops = [
  //     {
  //     image: "../../../../assets/images/laptop1.jpg",
  //     brand: "Asus",
  //     model: "Inspire+",
  //     price: 1000,
  //     fabric_date: "20/12/2021",
  //     cpu: "Intel Core i5-10210U",
  //     ram_expand: 4,
  //     graphics: "NVIDIA GTX-1050",
  //     resolution: "1440x990",
  //     rom: "1 TB SSD",
  //     hdmi: "Si",
  //     usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
  //     battery: 5550,
  //     os: "Windows 10",
  //     weight: 2.5,
  //     valoration: 4.6,
  //     _id: "60a54cffff2aec4fb0860fb2"
  //
  //   },
  //   {
  //     image: "../../../../assets/images/laptop2.jpg",
  //     brand: "Asus",
  //     model: "Inspire+",
  //     price: 1000,
  //     fabric_date: "20/12/2021",
  //     cpu: "Intel Core i5-10210U",
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: "DDR4 5DRAM",
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: "NVIDIA GTX-1050",
  //     resolution: "1440x990",
  //     rom: "1 TB SSD",
  //     hdmi: "Si",
  //     usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
  //     battery: 5550,
  //     os: "Windows 10",
  //     weight: 2.5,
  //     valoration: 4.6,
  //     _id: "606d5fc2b278be3fd63c7589"
  //   },
  //   {
  //     image: "../../../../assets/images/laptop1.jpg",
  //     brand: "Asus",
  //     model: "Inspire+",
  //     price: 1000,
  //     fabric_date: "20/12/2021",
  //     cpu: "Intel Core i5-10210U",
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: "DDR4 5DRAM",
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: "NVIDIA GTX-1050",
  //     resolution: "1440x990",
  //     rom: "1 TB SSD",
  //     hdmi: "Si",
  //     usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
  //     battery: 5550,
  //     os: "Windows 10",
  //     weight: 2.5,
  //     valoration: 4.6,
  //     _id: "606d5fc2b278be3fd63c7585"
  //   },
  //   {
  //     image: "../../../../assets/images/laptop2.jpg",
  //     brand: "Asus",
  //     model: "Inspire+",
  //     price: 1000,
  //     fabric_date: "20/12/2021",
  //     cpu: "Intel Core i5-10210U",
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: "DDR4 5DRAM",
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: "NVIDIA GTX-1050",
  //     resolution: "1440x990",
  //     rom: "1 TB SSD",
  //     hdmi: "Si",
  //     usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
  //     battery: 5550,
  //     os: "Windows 10",
  //     weight: 2.5,
  //     valoration: 4.6,
  //     _id: "606d5fc2b278be3fd63c7587"
  //   }]
}
