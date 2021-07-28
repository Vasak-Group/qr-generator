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
      this.dataservice.setDotsColor(
        {
          color: this.colorP,
          gradient: {
            type: this.typeDegrade,
            rotation: 0,
            colorStops: [{ offset: 0, color: this.colorP }, { offset: 1, color: this.colorD }]
          },
          type: 'rounded'
        }
      );
    }else{
      this.dataservice.setDotsColor(
        {
          color: this.colorP,
          type: 'rounded'
        }
      );

    }
  }

}
