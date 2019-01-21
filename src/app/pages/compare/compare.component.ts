import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'gap-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  cars: Car[] = [];
  selectedCars: Car[] = [];
  numberSelect = ["one", "two", "three"];
  showCompare: boolean = false;
  allowSubmit: boolean = false;

  constructor(  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((info: {data: Car[]}) => this.cars = info.data)
  }

  onCompareCars(show = true){
    this.showCompare = show;
  }

  onAllowSubmit({allow, selectedCars}){    
    this.allowSubmit = allow;    
    this.selectedCars = selectedCars;
  }

}
