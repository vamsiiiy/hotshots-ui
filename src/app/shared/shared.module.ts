import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { KeyeventListDirective } from './keyevent-list.directive';
import {ToastrModule} from 'ngx-toastr';
import {NgxSpinnerModule} from 'ngx-spinner';
import { ToastrGlobalOptions } from './services/toastr.config';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule  } from '@angular/material';


@NgModule({
  declarations: [KeyeventListDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(ToastrGlobalOptions.GLOBAL_OPTIONS),
    NgSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule ,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule 
  ],
  exports: [
    KeyeventListDirective,
    NgSelectModule,
    NgxSpinnerModule,
    ToastrModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule 
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers:[MatDatepickerModule]
    };
  }
 }
