import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {







  constructor(private router: Router) { }

  ngOnInit() {
  }

  editLaptop(id: any) {
    this.router.navigate(["dashboard/edition/change/" + id ])
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
    _id: "60a54cffff2aec4fb0860fb2"

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
