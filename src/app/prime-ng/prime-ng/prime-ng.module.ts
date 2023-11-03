import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    MenuModule,
    BrowserAnimationsModule
  ]
})
export class PrimeNgModule { }
