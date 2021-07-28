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
    CornerconfigComponent
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
