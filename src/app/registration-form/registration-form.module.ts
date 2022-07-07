
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,  NbButtonModule, NbSidebarComponent, NbSidebarModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  imports: [  
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule
  ],
  exports:[
    RegistrationFormComponent
  ]
})
export class RegistrationFormModule { }