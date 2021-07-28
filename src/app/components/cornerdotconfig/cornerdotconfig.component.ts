import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-cornerdotconfig',
  templateUrl: './cornerdotconfig.component.html',
  styleUrls: ['./cornerdotconfig.component.css']
})
export class CornerdotconfigComponent implements OnInit {
  isDegrade:boolean = false;
  typeDegrade:string = "lineal";
  colorP:string = "#71C608";
  colorD:string = "#71C608";
  rotation:number = 0;
  dotType:string = "extra-rounded";

  constructor(private dataservice:QRDataService) { }

  ngOnInit(): void {
  }

  save(){
    if(this.isDegrade){
      this.dataservice.setCornersDot(
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
      this.dataservice.setCornersDot(
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
