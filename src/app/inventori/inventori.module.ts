import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoriPageRoutingModule } from './inventori-routing.module';

import { InventoriPage } from './inventori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoriPageRoutingModule
  ],
})
export class InventoriPageModule {}