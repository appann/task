import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

userData:any = [];
constructor(public dataSrvc : DataService){
  
}

  ngOnInit(){
    this.dataSrvc.getData().subscribe((res:any)=>{
      console.log(res);
      this.userData = res;
    });


  }
  title = 'matellio';
}
