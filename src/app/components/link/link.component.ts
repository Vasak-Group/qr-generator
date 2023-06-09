import { Component, OnInit } from '@angular/core';
import { QRDataService } from '../../services/qrdata.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  urlData: string;

  constructor(private dataservice: QRDataService) {}

  ngOnInit(): void {}

  save() {
    this.dataservice.setData(this.urlData);
  }
}
