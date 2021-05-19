import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Laptop } from './../../../models/laptop.model';
import { LaptopsService } from './../../../services/laptops.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss'],
})
export class EditionComponent implements OnInit {
  isEditMode = false;
  id = '';
  laptop: Laptop = new Laptop();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private laptopsService: LaptopsService
  ) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        if (route.url.includes('change')) {
          this.isEditMode = true;
          this.id = this.route.snapshot.paramMap.get('id') || '';
          console.log(this.isEditMode);
        }
      }
    });
  }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
      if (this.isEditMode) {

        this.laptopsService.getLaptop(this.id).subscribe((data) => {
          console.log(data)
          this.laptop = data
        },
          error => {
            console.log("Error:", error);
          }
        );
      } else {
        console.log("Estamos creando un personaje")
      }
      //   for (let i = 0; i < this.laptops.length; i++) {
      //     if (params.id == this.laptops[i]._id) {
      //       this.data = this.laptops[i];
      //     }
      //   }
      // } else {
      //   this.datan = {
      //     image: '',
      //     brand: '',
      //     model: '',
      //     price: 0,
      //     fabric_date: '',
      //     cpu: '',
      //     cpu_core: 0,
      //     cpu_speed: 0,
      //     ram_type: '',
      //     ram_speed: 0,
      //     ram_size: 0,
      //     ram_expand: 0,
      //     graphics: '',
      //     resolution: '',
      //     rom: '',
      //     hdmi: '',
      //     usb: '',
      //     battery: 0,
      //     os: '',
      //     weight: 0,
      //     valoration: 0,
      //     _id: '',
      //   };
      //}
    }
  //   );
  // }


  saveLaptop(
    // brand: string,
    // model: string,
    // price: number,
    // fabric_date: Date,
    // cpu: string,
    // cpu_core: number,
    // cpu_speed: number,
    // ram_type: string,
    // ram_speed: number,
    // ram_size: number,
    // ram_expand: number,
    // graphics: string,
    // resolution: string,
    // rom: string,
    // hdmi: boolean,
    // usb: string,
    // battery: number,
    // os: string,
    // weight: string,
    // valoration: number
  ) {

    // laptop.image = '../../../../assets/images/laptop1.jpg';
    // laptop.brand = brand;
    // laptop.model = model;
    // laptop.price = price;
    // laptop.fabric_date = fabric_date;
    // laptop.cpu = cpu;
    // laptop.cpu_core = cpu_core;
    // laptop.cpu_speed = cpu_speed;
    // laptop.ram_type = ram_type;
    // laptop.ram_speed = ram_speed;
    // laptop.ram_size = ram_size;
    // laptop.ram_expand = ram_expand;
    // laptop.graphics = graphics;
    // laptop.resolution = resolution;
    // laptop.rom = rom;
    // laptop.hdmi = hdmi;
    // laptop.usb = usb;
    // laptop.battery = battery;
    // laptop.os = os;
    // laptop.weight = weight;
    // laptop.valoration = valoration;

    this.laptopsService.saveLaptop(this.laptop).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/dashboard']);
        // this.location.back()
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }


  updateLaptop(){

    this.laptopsService.updateLaptop(this.laptop).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/dashboard']);
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  laptops = [
    {
      image: '../../../../assets/images/laptop1.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7588',
    },
    {
      image: '../../../../assets/images/laptop2.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7589',
    },
    {
      image: '../../../../assets/images/laptop1.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7585',
    },
    {
      image: '../../../../assets/images/laptop2.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7587',
    },
    {
      image: '../../../../assets/images/laptop1.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7586',
    },
    {
      image: '../../../../assets/images/laptop2.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7580',
    },
    {
      image: '../../../../assets/images/laptop1.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7581',
    },
    {
      image: '../../../../assets/images/laptop2.jpg',
      brand: 'Asus',
      model: 'Inspire+',
      price: 1000,
      fabric_date: '20/12/2021',
      cpu: 'Intel Core i5-10210U',
      cpu_core: 4,
      cpu_speed: 3.9,
      ram_type: 'DDR4 5DRAM',
      ram_speed: 2800,
      ram_size: 16,
      ram_expand: 4,
      graphics: 'NVIDIA GTX-1050',
      resolution: '1440x990',
      rom: '1 TB SSD',
      hdmi: 'Si',
      usb: '2 puertos USB 2.0 y 1 puerto USB 3.0',
      battery: 5550,
      os: 'Windows 10',
      weight: 2.5,
      valoration: 4.6,
      _id: '606d5fc2b278be3fd63c7582',
    },
  ];
}
