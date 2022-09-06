import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  mailData: string;

  constructor(private dataservice: QRDataService) { }

  ngOnInit(): void {
  }

  save() {
    this.dataservice.setData(`mailto:${this.mailData}`);
  }

}
