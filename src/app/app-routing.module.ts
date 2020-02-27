import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { ViewPropertiesComponent } from './_components/view-properties/view-properties.component';
import { HomeComponent } from './_components/home/home.component';
import { WhoWeAreComponent } from './_components/who-we-are/who-we-are.component';
import { RealStateServicesComponent } from './_components/real-state-services/real-state-services.component';
import { ContactUsComponent } from './_components/contact-us/contact-us.component';
import { ViewPropertyComponent } from './_components/view-property/view-property.component';

const routes: Routes = [
  { path: '', redirectTo: '/inmuebles', pathMatch: 'full'},
  { path: 'inmuebles', component: ViewPropertiesComponent},
  { path: 'servicios-inmobiliarios', component: RealStateServicesComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'quienes-somos', component: WhoWeAreComponent},
  { path: 'contactanos', component: ContactUsComponent},
  { path: 'inmueble/:propertyId', component: ViewPropertyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
