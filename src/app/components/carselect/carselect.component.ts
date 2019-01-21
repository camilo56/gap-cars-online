import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'gap-carselect',
  templateUrl: './carselect.component.html',
  styleUrls: ['./carselect.component.scss']
})
export class CarselectComponent implements OnInit {

  selectedCars: Car[] = [];
  @Input("cars") cars: Car[];
  @Input("numberSelect") numberSelect: string[];
  @Output() onAllowSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCompareCars: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  optionSelected(event: KeyboardEvent){
    let element = (<HTMLInputElement>event.target);

    if(element.value === ""){
      this.onCompareCars.emit(false);
      this.selectedCars[element.id] = null;
    }else{
      this.selectedCars[element.id] = this.getCardById(element.value)
    }

    if(this.selectedCars.length === this.numberSelect.length && this.selectedCars.every(x => Boolean(x))){
      this.onAllowSubmit.emit({allow: true, selectedCars: this.selectedCars});
    }else{
      this.onAllowSubmit.emit({allow: false, selectedCars: []});
    }
  }

  getCardById(id){
    return this.cars.filter(car => car.id == id)[0];
  }
  
}
