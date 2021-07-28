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
  rotation:number = 0;
  dotType:string = "rounded";

  constructor(private dataservice:QRDataService) { }

  ngOnInit(): void {
  }

  save(){
    if(this.isDegrade){
      this.dataservice.setDots(
        {
          color: this.colorP,
          gradient: {
            type: this.typeDegrade,
            rotation: this.rotation,
            colorStops: [{ offset: 0, color: this.colorP }, { offset: 1, color: this.colorD }]
          },
          type: this.dotType
        }
      );
    }else{
      this.dataservice.setDots(
        {
          color: this.colorP,
          type: this.dotType
        }
      );

    }
  }

  setDot(strDot:string):void{
    this.dotType = strDot;
    this.save();
  }

}
