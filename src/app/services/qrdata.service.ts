import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrdataService {
  qrData = {
      width: 232,
      height: 232,
      margin: 14,
      data: "https://www.facebook.com/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      dotsOptions: {
        color: "#4267b2",
        type: "rounded"
      },
      backgroundOptions: {
        color: "#e9ebee"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 14
      }
    }

  constructor() { }

  getQRData(){
    return qrData;
  }

  setMargin(intMagin): void{
    qrData.margin = intMagin;
  }

  setData(strData): void{
    qrData.data = strData;
  }

  setImage(strImage): void{
    qrData.image = srtImage;
  }

  setSize(intH, intW): void{
    qrData.height = intH;
    qrData.width = intW;
  }
}
