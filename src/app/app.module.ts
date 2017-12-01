import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  RippleGlobalOptions,
  MAT_RIPPLE_GLOBAL_OPTIONS,
} from '@angular/material';

import { AppComponent } from './app.component';
import { MyNewComponent4Component } from './my-new-component4/my-new-component4.component';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  baseSpeedFactor: 1.5, // Ripples will animate 50% faster than before.
};

@NgModule({
  declarations: [AppComponent, MyNewComponent4Component],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
