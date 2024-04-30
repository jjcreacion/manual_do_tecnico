import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquePageRoutingModule } from './esque-routing.module';
import { EsquePage } from './esque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquePageRoutingModule,
  ],
  declarations: [EsquePage]
})
export class EsquePageModule {}
