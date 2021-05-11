import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {


  laptops = [
    {
    image: "../../../../assets/images/laptop1.jpg",
    model: "Acer Inspire+",
    price: 1000,
    valoration: 4.6,

  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    model: "MSI GL300",
    price: 900,
    valoration: 3.5,

  },
  {
    image: "../../../../assets/images/laptop1.jpg",
    model: "Acer Inspire+",
    price: 1000,
    valoration: 4.6,

  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    model: "MSI GL300",
    price: 900,
    valoration: 3.5,

  },
  {
    image: "../../../../assets/images/laptop1.jpg",
    model: "Acer Inspire+",
    price: 1000,
    valoration: 4.6,

  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    model: "MSI GL300",
    price: 900,
    valoration: 3.5,

  },
  {
    image: "../../../../assets/images/laptop1.jpg",
    model: "Acer Inspire+",
    price: 1000,
    valoration: 4.6,

  },
  {
    image: "../../../../assets/images/laptop2.jpg",
    model: "MSI GL300",
    price: 900,
    valoration: 3.5,

  },


]

  constructor() { }

  ngOnInit() {
  }
}
