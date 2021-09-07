import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './partials/topbar/topbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LinkComponent } from './components/link/link.component';
import { QrviewComponent } from './components/qrview/qrview.component';
import { QrdataComponent } from './components/qrdata/qrdata.component';
import { DotconfigComponent } from './components/dotconfig/dotconfig.component';
import { CornerdotconfigComponent } from './components/cornerdotconfig/cornerdotconfig.component';
import { CornerconfigComponent } from './components/cornerconfig/cornerconfig.component';
import { ImageconfigComponent } from './components/imageconfig/imageconfig.component';
import { WifiComponent } from './components/wifi/wifi.component';
import { PlaystoreComponent } from './components/playstore/playstore.component';
import { MailComponent } from './components/mail/mail.component';
import { TelComponent } from './components/tel/tel.component';
import { SmsComponent } from './components/sms/sms.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    LinkComponent,
    QrviewComponent,
    QrdataComponent,
    DotconfigComponent,
    CornerdotconfigComponent,
    CornerconfigComponent,
    ImageconfigComponent,
    WifiComponent,
    PlaystoreComponent,
    MailComponent,
    TelComponent,
    SmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
