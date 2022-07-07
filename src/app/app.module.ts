import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,  NbButtonModule,NbSidebarModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { GalleryModule } from './gallery/gallery.module';
import { RegistrationFormModule } from './registration-form/registration-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    RouterModule,
    NbSidebarModule,
    NbCardModule,
    GalleryModule,
    RegistrationFormModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
