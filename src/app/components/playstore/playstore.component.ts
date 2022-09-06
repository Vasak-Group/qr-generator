import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-playstore',
  templateUrl: './playstore.component.html',
  styleUrls: ['./playstore.component.css']
})
export class PlaystoreComponent implements OnInit {
  idData: string;

  constructor(private dataservice: QRDataService) { }

  ngOnInit(): void {
  }

  save() {
    this.dataservice.setData(`market://details?id=${this.idData}`);
  }

}
