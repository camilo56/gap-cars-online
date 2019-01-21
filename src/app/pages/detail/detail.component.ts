import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'gap-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  data: Car;
  maxWidth = {"max-width": "600px"};

  constructor(  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((info: {data: Car}) =>this.data = info.data)
  }

}
