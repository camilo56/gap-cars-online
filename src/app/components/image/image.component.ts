import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'gap-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  
  finalUrl: string;
  loadingClass = "loading";
  @Input("url") url: string;
  @Input("maxWidth") maxWidth;
  @ViewChild('img') img: ElementRef;
  
  constructor() { }

  ngOnInit() {
    console.log("maxWidth", this.maxWidth);
    this.finalUrl = this.url;
    this.img.nativeElement.onerror = error => this.onError(error);
  }

  onError(error){
    this.finalUrl = "./assets/error.png";
  }

}
