import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  isEditMode = false
  isNewMode = false
  id = ""
  data!: any;






  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(route => {

      if (route instanceof NavigationEnd) {
        if (route.url.includes("/edition/new")) {

          this.isEditMode = false

        } else {
          this.isEditMode = true
          this.id = this.route.snapshot.paramMap.get("id") || ""
          console.log(this.isEditMode)
        }
      }

    })

  }


  ngOnInit() {

    console.log(this.isEditMode)
    this.route.params.subscribe( params => {

        for (let i = 0; i < this.laptops.length; i++) {
          if(params.id == this.laptops[i]._id){
            this.data = this.laptops[i]

          }

        }

      })


  }

  laptops = [
    {
    image: "../../../../assets/images/laptop1.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7588"

  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7589"
  },
  {
    image: "../../../../assets/images/laptop1.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7585"
  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7587"
  },
  {
    image: "../../../../assets/images/laptop1.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7586"
  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7580"
  },
  {
    image: "../../../../assets/images/laptop1.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7581"
  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    brand: "Asus",
    model: "Inspire+",
    price: 1000,
    fabric_date: "20/12/2021",
    cpu: "Intel Core i5-10210U",
    cpu_core: 4,
    cpu_speed: 3.9,
    ram_type: "DDR4 5DRAM",
    ram_speed: 2800,
    ram_size: 16,
    ram_expand: 4,
    graphics: "NVIDIA GTX-1050",
    resolution: "1440x990",
    rom: "1 TB SSD",
    hdmi: "Si",
    usb: "2 puertos USB 2.0 y 1 puerto USB 3.0",
    battery: 5550,
    os: "Windows 10",
    weight: 2.5,
    valoration: 4.6,
    _id: "606d5fc2b278be3fd63c7582"
  },]

}
