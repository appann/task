import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userData:any = [];
  constructor(public dataSrvc : DataService){
    
  }
  
    ngOnInit(){
      this.dataSrvc.getData().subscribe((res:any)=>{
        console.log(res);

        for(var a=0; a<15; a++){
this.userData.push(res[a]);
        }
        
      });
  
  
    }

    compare(i:any){
      this.dataSrvc.setCompare(this.userData[i]);
      this.userData.splice(0,i);
    }

    displayCounter(data:any){
      console.log(data);

    }
  }
  
