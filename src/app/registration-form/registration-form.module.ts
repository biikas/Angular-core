
import { NgModule } from '@angular/core';
import {   NbButtonModule,  NbCardModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { RegistrationFormComponent } from './registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [
    RegistrationFormComponent,
    BillComponent
    
    
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
    RegistrationFormComponent,
    BillComponent
    
  ]
})
export class RegistrationFormModule { }