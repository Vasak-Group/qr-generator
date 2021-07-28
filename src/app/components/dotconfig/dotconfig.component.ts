import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-dotconfig',
  templateUrl: './dotconfig.component.html',
  styleUrls: ['./dotconfig.component.css']
})

export class DotconfigComponent implements OnInit {
  isDegrade:boolean = false;
  typeDegrade:string = "lineal";
  colorP:string = "#71C608";
  colorD:string = "#71C608";

  constructor(private dataservice:QRDataService) { }

  ngOnInit(): void {
  }

  save(){
    if(this.isDegrade){
      console.log(this.colorP);
      console.log(this.colorD);
      console.log(this.typeDegrade);
    }else{
      console.log(this.colorP);
    }
  }

}
