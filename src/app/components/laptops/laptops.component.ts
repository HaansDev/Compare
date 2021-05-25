import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopsService } from '../../services/laptops.service';
import { Laptop } from '../../models/laptop.model';

@Component({
  selector: 'app-amd',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss'],
})
export class LaptopsComponent implements OnInit {
    currentValues = [0, 0];
    someLaptops: Array<Laptop> = [];
    allLaptops: Array<Laptop> = [];
    page!: number;
    prevPage!: number;
    nextPage!: number;
    totalPages!: number;
    pages: Array<number> = [];


   filter!: string;
   minPrice!: string;
   maxPrice!: string;
   cpuAMD!: string;
   cpuINTEL!: string;
   cpuMONE!: string;
   graphicsAMD!: string;
   graphicsNVIDIA!: string;
   graphicsINTEGRATED!: string;
   romHDD!: string;
   romSSD!: string;
   ram_typeTHREE!: string;
   ram_typeFOUR!: string;


    constructor(private activateRoute: ActivatedRoute, private router: Router, private laptopsService: LaptopsService) { }

    ngOnInit(): void {
      this.filter = ""
      this.minPrice = ""
      this. maxPrice = ""
      this.cpuAMD = ""
      this.cpuINTEL = ""
      this.cpuMONE = ""
      this.graphicsAMD = ""
      this.graphicsNVIDIA = ""
      this.graphicsINTEGRATED = ""
      this.romHDD = ""
      this.romSSD = ""
      this.ram_typeTHREE = ""
      this.ram_typeFOUR = ""


      this.activateRoute.params.subscribe( params => {
        this.page = params.page
      })
      this.getPullLaptops()
      this.getPages()
    }


    onSliderChange(selectedValues: number[]) {
        this.currentValues = selectedValues;
        console.log(this.currentValues)
    }

    detailLaptop(id: any) {
      this.router.navigate(["laptop/" + id ])
    }

    getPullLaptops()  {
        this.laptopsService.getPaginationLaptops(this.page).subscribe(
          (data: Laptop[]) => {
            this.someLaptops = data;
            // console.log(data);
          },
          (error) => {
            console.log('Error:', error);
          }
        );
    }


    getPages() {
      this.laptopsService.getLaptops(this.filter, this.minPrice, this.maxPrice, this.cpuAMD, this.cpuINTEL, this.cpuMONE, this.graphicsAMD,this.graphicsNVIDIA, this.graphicsINTEGRATED, this.romHDD, this.romSSD, this.ram_typeTHREE, this.ram_typeFOUR).subscribe(
            (data: Laptop[]) => {
                this.allLaptops = data;
                this.totalPages = Math.ceil(this.allLaptops.length/12);
                this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
            },
            (error: any) => {
                console.log('Error:', error);
            }
        );
    }


    goPage(page: number) {
        this.router.navigate(['/laptops/' + page]);
        this.activateRoute.params.subscribe(params => {
            page = params.page;
            this.getPages();
            this.getPullLaptops();
        })
    }
    goNextPage() {
        if (this.page < this.totalPages) {
            this.nextPage = (parseInt(this.page + "") + 1)
            console.log(this.nextPage)
            console.log(this.page)
            this.goPage(this.nextPage)
        } else {
          this.goPage(this.totalPages)
        }
    }
    goPrevPage() {
        if (this.page > 1) {
            this.prevPage = this.page - 1
            this.goPage(this.prevPage)
        } else{
            this.goPage(1)
        }
    }



    laptops: Array<Laptop> = [];


    loadLaptops(){
      let filter = ""
      let minPrice = ""
      let maxPrice = ""
      let graphics = ""
      let rom = ""
      let cpu = ""
      let ram_type = ""



      this.laptopsService.getLaptops(this.filter, this.minPrice, this.maxPrice, this.cpuAMD, this.cpuINTEL, this.cpuMONE, this.graphicsAMD,this.graphicsNVIDIA, this.graphicsINTEGRATED, this.romHDD, this.romSSD, this.ram_typeTHREE, this.ram_typeFOUR).subscribe(
        (data: Laptop[]) => {
          this.allLaptops = data;
          console.log(data);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
}
