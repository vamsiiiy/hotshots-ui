import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { KeyeventListDirective } from './keyevent-list.directive';


@NgModule({
  declarations: [KeyeventListDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [KeyeventListDirective]
})
export class SharedModule { }
