import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-laptop',
  templateUrl: './detail-laptop.component.html',
  styleUrls: ['./detail-laptop.component.scss']
})
export class DetailLaptopComponent implements OnInit {

  constructor(private active: ActivatedRoute) { }

  ngOnInit(): void {
      this.active.params.subscribe( params => {
      console.log(params.id);

    })
  }

}
