import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'gap-compare-details',
  templateUrl: './compare-details.component.html',
  styleUrls: ['./compare-details.component.scss']
})
export class CompareDetailsComponent implements OnInit {

  @Input("selectedCars") selectedCars: Car[];

  constructor() { }

  ngOnInit() {
  }

}
