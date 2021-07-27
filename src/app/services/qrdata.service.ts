import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QRDataService {
  qrData = {
      width: 300,
      height: 300,
      type: 'svg',
      data: "https://www.facebook.com/",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      margin: 10,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q'
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 20,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: "#4267b2",
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'rounded'
      },
      backgroundOptions: {
        color: '#e9ebee',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#BD022D',
        type: 'extra-rounded',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#BD022D',
        type: 'dot',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      }
    }

  constructor() { }

  getQRData():object{
    return this.qrData;
  }

  setMargin(intMagin:number):void{
    this.qrData.margin = intMagin;
  }

  setData(strData:string):void{
    this.qrData.data = strData;
  }

  setImage(strImage:string):void{
    this.qrData.image = strImage;
  }

  setSize(intH:number, intW:number):void{
    this.qrData.height = intH;
    this.qrData.width = intW;
  }
}
