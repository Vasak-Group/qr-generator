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
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constructor(private dataservice:QRDataService) {
    this.qrCode = new QRCodeStyling(this.dataservice.getQRData());
  }

  ngOnInit(): void {
    console.log(QRCodeStyling);
    if (!QRCodeStyling) {
      return;
    }
    this.qrCode.append(this.canvas.nativeElement);
  }

  update():void{
    this.qrCode = new QRCodeStyling(this.dataservice.getQRData());
    this.qrCode.append(this.canvas.nativeElement);
  }

}
