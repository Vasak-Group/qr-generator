import { Component, OnInit } from '@angular/core';
import { QRDataService } from "../../services/qrdata.service";

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.css']
})

export class WifiComponent implements OnInit {
  name:string = "";
  pass:string = "";
  isHidden:boolean = false;
  typePass:string = "nopass";

  constructor(private dataservice:QRDataService) { }

  ngOnInit(): void {
  }

  save(){
    let ret = "WIFI:T:".concat(this.typePass).concat(";S:").concat(this.name).concat(";P:").concat(this.pass).concat(";H:").concat(this.isHidden.toString()).concat(";;")
    console.log(ret)
  }

}
