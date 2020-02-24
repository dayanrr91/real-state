import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './_components/header/header.component';
import { ViewPropertiesComponent } from './_components/view-properties/view-properties.component';
import { PropertyComponent } from './_components/property/property.component';
import { FooterComponent } from './_components/footer/footer.component';
import { WhoWeAreComponent } from './_components/who-we-are/who-we-are.component';
import { RealStateServicesComponent } from './_components/real-state-services/real-state-services.component';
import { ContactUsComponent } from './_components/contact-us/contact-us.component';
import { HomeComponent } from './_components/home/home.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewPropertiesComponent,
    PropertyComponent,
    FooterComponent,
    WhoWeAreComponent,
    RealStateServicesComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
