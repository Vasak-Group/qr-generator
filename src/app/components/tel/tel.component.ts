import { Component, OnInit } from '@angular/core';
import { QRDataService } from '../../services/qrdata.service';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.scss'],
})
export class TelComponent implements OnInit {
  telData: number;

  constructor(private dataservice: QRDataService) {}

  ngOnInit(): void {}

  save() {
    this.dataservice.setData(`tel:${this.telData}`);
  }
}
