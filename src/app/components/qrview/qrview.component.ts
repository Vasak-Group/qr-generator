import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-qrview',
  templateUrl: './qrview.component.html',
  styleUrls: ['./qrview.component.css']
})

export class QrviewComponent implements OnInit {
  qrCode:QRCodeStyling;
  typeFile:any = "png";
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constructor(private dataservice:QRDataService) {
    this.qrCode = new QRCodeStyling(this.dataservice.getQRData());
  }

  ngOnInit(): void {
    this.qrCode.append(this.canvas.nativeElement);
  }

  update():void{
    this.qrCode.update(this.dataservice.getQRData());
  }

  download():void{
    this.qrCode.download({ name: "lynx-qr", extension: this.typeFile });
  }

}
