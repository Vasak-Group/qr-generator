import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  telData: number;

  constructor(private dataservice: QRDataService) { }

  ngOnInit(): void {
  }

  save() {
    this.dataservice.setData(`sms:${this.telData}`);
  }

}
