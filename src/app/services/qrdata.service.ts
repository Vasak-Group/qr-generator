import { Injectable } from '@angular/core';
import {
  QRCornersDotOptions,
  QRCornersSquareOptions,
  QRData,
  QRDotsOptions,
  QRImageOptions,
} from '../interfaces/QRData';

@Injectable({
  providedIn: 'root',
})
export class QRDataService {
  qrData: QRData;

  constructor() {
    this.qrData = {
      width: 200,
      height: 200,
      type: 'svg',
      data: 'https://qrgenerator.vasak.net.ar/',
      image: '/assets/img/logo.svg',
      margin: 10,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 3,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#71C608',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'rounded',
      },
      backgroundOptions: {
        color: 'rgba(255,255,255,0.6)',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#71C608',
        type: 'extra-rounded',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#71C608',
        type: 'dot',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      },
    };
  }

  getQRData(): object {
    return this.qrData;
  }

  setMargin(intMagin: number): void {
    this.qrData.margin = intMagin;
  }

  setData(strData: string): void {
    this.qrData.data = strData;
  }

  setImage(strImage: string): void {
    this.qrData.image = strImage;
  }

  setImageOptions(objImage: QRImageOptions): void {
    this.qrData.imageOptions = objImage;
  }

  setSize(intH: number, intW: number): void {
    this.qrData.height = intH;
    this.qrData.width = intW;
  }

  setDots(objDots: QRDotsOptions): void {
    this.qrData.dotsOptions = objDots;
  }

  setCorners(objCorn: QRCornersSquareOptions): void {
    this.qrData.cornersSquareOptions = objCorn;
  }

  setCornersDot(objCorn: QRCornersDotOptions): void {
    this.qrData.cornersDotOptions = objCorn;
  }
}
