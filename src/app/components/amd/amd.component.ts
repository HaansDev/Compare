import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from '../../models/laptop.model';

@Component({
  selector: 'app-amd',
  templateUrl: './amd.component.html',
  styleUrls: ['./amd.component.scss']
})
export class AmdComponent implements OnInit {
    allLaptops: Array<Laptop> = []

    constructor(private activeRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    }
    loadData() {
        this.allLaptops = [
            {
                "_id": "606d5fc21071e6e38e8ef840",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef810",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef820",
                "image": "https://bunny.pcware.com.co/wp-content/uploads/2018/05/portatil-lenovo-v310.jpg",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef830",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef850",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef860",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef865",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef870",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef875",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef880",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            },
            {
                "_id": "606d5fc21071e6e38e8ef890",
                "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "name": "Portatil DELL Lorem Ipsum",
                "model": "DELL Lorem Ipsum",
                "manufacturing": "01/01/0101",
                "cpu": "AMD Ryzen 3 a 2.9 GHz 2 nucleos",
                "ram": "4 GB 2444 MHz",
                "gpu": "APU Integrada VEGA",
                "screen": '16" a una resolución máxima de 1920 x 1080',
                "storage": "1 HDD 1 TB de almacenamiento",
                "ports": "3 puertos USB 2.0 y 1 puerto USB 3.0",
                "system": "Windows 10 Home",
                "batery": "Integrated 38Wh",
                "weight": "1.65 kg"
            }
        ]
    }
}
