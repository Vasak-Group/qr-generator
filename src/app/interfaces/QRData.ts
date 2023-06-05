export interface QRData {
  width: number;
  height: number;
  type: string;
  data: string;
  image: string;
  margin: number;
  qrOptions: QROptions;
  imageOptions: QRImageOptions;
  dotsOptions: QRDotsOptions;
  backgroundOptions: QRBackgroundOptions;
  cornersSquareOptions: QRCornersSquareOptions;
  cornersDotOptions: QRCornersDotOptions;
}

export interface QROptions {
  typeNumber: number;
  mode: string;
  errorCorrectionLevel: string;
}

export interface QRImageOptions {
  hideBackgroundDots: boolean;
  imageSize: number;
  margin: number;
  crossOrigin: string;
}

export interface QRDotsOptions {
  color?: string;
  gradient?: QRGraident;
  type: string;
}

export interface QRGraident {
  type: string;
  rotation: number;
  colorStops: QRGraidentColor[];
}

export interface QRGraidentColor {
  offset: number;
  color: string;
}

export interface QRBackgroundOptions {
  color?: string;
  gradient?: QRGraident;
}

export interface QRCornersSquareOptions {
  color?: string;
  type: string;
  gradient?: QRGraident;
}

export interface QRCornersDotOptions {
  color?: string;
  type: string;
  gradient?: QRGraident;
}
