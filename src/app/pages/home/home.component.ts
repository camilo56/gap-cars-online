import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'gap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  filter: string;
  data: Car[] = [];
  @ViewChild('searchMark') searchMark: ElementRef;

  constructor(  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((info: {data: Car[]}) =>this.data = info.data)
  }

  onKey(event: KeyboardEvent) { // with type info
    this.filter = (<HTMLInputElement>event.target).value;
    console.log(this.filter);
  }

}
