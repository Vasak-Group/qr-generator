import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-imageconfig',
  templateUrl: './imageconfig.component.html',
  styleUrls: ['./imageconfig.component.css']
})

export class ImageconfigComponent implements OnInit {
  usarPropia: boolean = false;
  imagen: string = "/assets/img/logo.svg";
  margin: number = 3;
  hideBack: boolean = true;
  imagenURL: string = "";

  constructor(private dataservice: QRDataService) { }

  ngOnInit(): void {
  }

  change(strIMG: string): void {
    this.imagen = strIMG;
    this.save();
  }

  setIMGURL(): void {
    this.change(this.imagenURL);
  }

  save(): void {
    this.dataservice.setImage(this.imagen);
    this.dataservice.setImageOptions({
      hideBackgroundDots: this.hideBack,
      imageSize: 0.4,
      margin: this.margin,
      crossOrigin: 'anonymous',
    })
  }

}
