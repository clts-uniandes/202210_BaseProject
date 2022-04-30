import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  cantidadCafeOrigen: number = 0;
  cantidadCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.cantidadCafeOrigen = this.getCafesOrigen(cafes);
      this.cantidadCafeBlend = this.getCafesBlend(cafes);
    });
  }

  getCafesOrigen(cafes: Array<Cafe>): number {
    let totalCafeOrigen: number = 0;
    for(let i=0; i < cafes.length; i++) {
      if(cafes[i].tipo=="Café de Origen"){
        totalCafeOrigen = totalCafeOrigen + 1;
      }
    }
    return totalCafeOrigen;
  }

  getCafesBlend(cafes: Array<Cafe>): number {
    let totalCafeBlend: number = 0;
    for(let i=0; i < cafes.length; i++) {
      if(cafes[i].tipo=="Blend"){
        totalCafeBlend = totalCafeBlend + 1;
      }
    }
    console.log(totalCafeBlend);
    return totalCafeBlend;
  }

  ngOnInit() {
    this.getCafes();
  }

}
