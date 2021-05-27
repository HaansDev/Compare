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
    listLaptops: Laptop[] = []
  constructor(private active: ActivatedRoute, private router: Router, private CompareService: CompareService) { }

  ngOnInit(): void {
      this.CompareService.getLaptops$().subscribe(laptops => {
              this.listLaptops = laptops
              console.log(this.listLaptops)
      })
  }
  formatDate(date?: any): string{
    return moment(date).format("DD/MM/YYYY")
  }
}
