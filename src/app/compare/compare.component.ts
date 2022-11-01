import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
compareTable : any = [];
@Output() valueChange = new EventEmitter();

constructor(public dataSrvc : DataService){}

  ngOnInit(): void {

    this.compareTable = this.dataSrvc.getCompareDetails();
    console.log(this.compareTable);
  }

  remove(i :number){
    console.log(i);
    this.valueChange.emit(this.compareTable(i));

  }

}
