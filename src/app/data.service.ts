import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  compareDetails : any = [];

  constructor(public http : HttpClient) { }


  getData(){
    var url = "https://jsonplaceholder.typicode.com/photos";
    return this.http.get(url);
  }
  setCompare(data:any){

    data["compare"] = "true";
    this.compareDetails.push(data);

  }

  getCompareDetails(){
    return this.compareDetails;
  }
}
