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
    allLaptopsFiltered: Array<Laptop> = [];
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



   cpuAMDV!: Boolean;
   cpuINTELV!: Boolean;
   cpuMONEV!: Boolean;
   graphicsAMDV!: Boolean;
   graphicsNVIDIAV!: Boolean;
   graphicsINTEGRATEDV!: Boolean;
   romHDDV!: Boolean;
   romSSDV!: Boolean;
   ram_typeTHREEV!: Boolean;
   ram_typeFOURV!: Boolean;


    constructor(private activateRoute: ActivatedRoute, private router: Router, private laptopsService: LaptopsService) { }

    ngOnInit(): void {
      this.filter = ""
      this.minPrice = "0"
      this.maxPrice = "5000"
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

      this.cpuAMDV = false
      this.cpuINTELV = false
      this.cpuMONEV = false
      this.graphicsAMDV = false
      this.graphicsNVIDIAV = false
      this.graphicsINTEGRATEDV = false
      this.romHDDV = false
      this.romSSDV = false
      this.ram_typeTHREEV = false
      this.ram_typeFOURV = false

      this.activateRoute.queryParams.subscribe( value =>{
        if(value.filter != undefined){
        this.filter = value.filter}
      })

      this.activateRoute.params.subscribe( params => {
        this.page = params.page
      })


      this.getFilterLaptops()
      this.getPages()
    }


    goToOne(){
      this.router.navigate(["/laptops/" + 1 ])

    }


    detailLaptop(id: any) {
      this.router.navigate(["laptop/" + id ])
      window.scroll(0, 0);
    }

    // getPullLaptops()  {
    //     this.laptopsService.getPaginationLaptops(this.page).subscribe(
    //       (data: Laptop[]) => {
    //         this.someLaptops = data;
    //         // console.log(data);
    //       },
    //       (error) => {
    //         console.log('Error:', error);
    //       }
    //     );
    // }


    getPages() {


      this.laptopsService.getLaptops( this.filter, this.minPrice, this.maxPrice, this.cpuAMD, this.cpuINTEL, this.cpuMONE, this.graphicsAMD,this.graphicsNVIDIA, this.graphicsINTEGRATED, this.romHDD, this.romSSD, this.ram_typeTHREE, this.ram_typeFOUR).subscribe(
            (data: Laptop[]) => {
                this.allLaptopsFiltered = data;
                // console.log(this.allLaptopsFiltered)
                this.totalPages = Math.ceil(this.allLaptopsFiltered.length/12);
                this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
                // console.log(this.pages)
            },
            (error: any) => {
                console.log('Error:', error);
            }
        );


        // if(this.page > this.totalPages){
        //   this.router.navigate(['/laptops/' + 1]);
        // }


    }


    goPage(page: number) {
        this.router.navigate(['/laptops/' + page]);
        this.activateRoute.params.subscribe(params => {
            page = params.page;
            this.getPages();
            this.getFilterLaptops();
        })
    }
    goNextPage() {
        if (this.page < this.totalPages) {
            this.nextPage = (parseInt(this.page + "") + 1)
            // console.log(this.nextPage)
            // console.log(this.page)
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



    getFilterLaptops(){

      this.laptopsService.getLaptopsPagination(this.page, this.filter, this.minPrice, this.maxPrice, this.cpuAMD, this.cpuINTEL, this.cpuMONE, this.graphicsAMD,this.graphicsNVIDIA, this.graphicsINTEGRATED, this.romHDD, this.romSSD, this.ram_typeTHREE, this.ram_typeFOUR).subscribe(
        (data: Laptop[]) => {
          this.someLaptops = data;
          // console.log(data);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }

    onSearchChange(searchValue: any) {
      this.filter = searchValue.target.value
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()
   }

    onSliderChange(selectedValues: number[]) {
      this.currentValues = selectedValues;
      // console.log(this.currentValues)

      this.minPrice = String(this.currentValues[0])
      this.maxPrice = String(this.currentValues[1])
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()
  }


    onCheckA(){

      this.cpuAMDV = !this.cpuAMDV

      if(this.cpuAMDV == true){
        this.cpuAMD = "AMD";
    } else{
      this.cpuAMD = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckB(){

      this.cpuINTELV = !this.cpuINTELV

      if(this.cpuINTELV == true){
        this.cpuINTEL = "Intel";
    } else{
      this.cpuINTEL = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()
    }

    onCheckC(){

      this.cpuMONEV = !this.cpuMONEV

      if(this.cpuMONEV == true){
        this.cpuMONE = "M1";
    } else{
      this.cpuMONE = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckD(){

      this.graphicsAMDV = !this.graphicsAMDV

      if(this.graphicsAMDV == true){
        this.graphicsAMD= "AMD";
    } else{
      this.graphicsAMD = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckE(){

      this.graphicsNVIDIAV = !this.graphicsNVIDIAV

      if(this.graphicsNVIDIAV == true){
        this.graphicsNVIDIA= "NVIDIA";
    } else{
      this.graphicsNVIDIA = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckF(){

      this.graphicsINTEGRATEDV = !this.graphicsINTEGRATEDV

      if(this.graphicsINTEGRATEDV == true){
        this.graphicsINTEGRATED= "integrada";
    } else{
      this.graphicsINTEGRATED = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckG(){

      this.ram_typeTHREEV = !this.ram_typeTHREEV

      if(this.ram_typeTHREEV == true){
        this.ram_typeTHREE= "DDR3";
    } else{
      this.ram_typeTHREE = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckH(){

      this.ram_typeFOURV = !this.ram_typeFOURV

      if(this.ram_typeFOURV == true){
        this.ram_typeFOUR= "DDR4";
    } else{
      this.ram_typeFOUR = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckI(){

      this.romHDDV = !this.romHDDV

      if(this.romHDDV == true){
        this.romHDD= "HDD";
    } else{
      this.romHDD = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }

    onCheckJ(){

      this.romSSDV = !this.romSSDV

      if(this.romSSDV == true){
        this.romSSD= "SSD";
    } else{
      this.romSSD = ""
    }
      this.getFilterLaptops()
      this.getPages()
      this.goToOne()

    }
}
