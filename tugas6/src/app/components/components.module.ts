import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { IonicModule } from '@ionic/angular';

const myfirstcomponent = [MyfirstcomponentComponent];

@NgModule({
  declarations: [myfirstcomponent],
  exports: [myfirstcomponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
