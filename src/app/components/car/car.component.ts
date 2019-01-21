import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gap-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input("id") id: string;
  @Input("name") name: string;
  @Input("mark") mark: string;
  @Input("year") year: string;
  @Input("price") price: string;
  @Input("model") model: string;
  @Input("urlImage") urlImage: string;

  constructor() { }

  ngOnInit() {
  }

}
