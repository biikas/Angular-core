
import { NgModule } from '@angular/core';
import {  NbCardModule } from '@nebular/theme';

import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [  
    NbCardModule, 
    
  ],
  exports:[
    GalleryComponent
  ]
})
export class GalleryModule { }