import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-booking-popup-confirmation',
  templateUrl: './booking-popup-confirmation.component.html',
  styleUrls: ['./booking-popup-confirmation.component.css']
})
export class BookingPopupConfirmationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BookingPopupConfirmationComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  OnOk() {
    this.dialogRef.close("OK");
  }

}
