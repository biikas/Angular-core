
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,  NbButtonModule, NbSidebarComponent, NbSidebarModule, NbCardModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  imports: [  
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    CommonModule
  ],
  exports:[
    RegistrationFormComponent
  ]
})
export class RegistrationFormModule { }