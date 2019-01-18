import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'gap-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  
  finalUrl: string;
  @Input("url") url: string;
  @ViewChild('img') img: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.finalUrl = this.url;
    this.img.nativeElement.onerror = error => this.onError(error);
  }

  onError(error){
    this.finalUrl = "./assets/error.png";
  }
}
