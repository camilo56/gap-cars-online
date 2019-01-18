import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gap-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input("name") name: string;
  @Input("urlImage") urlImage: string;
  @Input("model") model: string;
  @Input("year") year: string;
  @Input("mark") mark: string;
  @Input("price") price: string;

  constructor() { }

  ngOnInit() {
    console.log(this.name, this.urlImage)
  }

}
