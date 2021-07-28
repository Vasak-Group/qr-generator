import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-imageconfig',
  templateUrl: './imageconfig.component.html',
  styleUrls: ['./imageconfig.component.css']
})

export class ImageconfigComponent implements OnInit {
  usarPropia:boolean = false;
  imagen:string = "";

  constructor(private dataservice:QRDataService) { }

  ngOnInit(): void {
  }

  change(strIMG:string):void{
    this.imagen = strIMG;
    this.save();
  }

  save():void{
    this.dataservice.setImage(this.imagen);
  }

}
