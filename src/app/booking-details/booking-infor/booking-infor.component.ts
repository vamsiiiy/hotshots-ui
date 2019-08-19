import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _ from "lodash";

@Component({
  selector: 'app-booking-infor',
  templateUrl: './booking-infor.component.html',
  styleUrls: ['./booking-infor.component.css']
})
export class BookingInforComponent implements OnInit {


  isEditable = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onContentEdit(event){
    console.log(event);
  }

  testData(data){
    console.log(data);
  }

  onEdit(){
    this.isEditable = true;
  }

  onSave() {
    console.log(this.data.bookingDetails);
  }

  onNewUtility() {
    if(this.data != null && this.data.bookingDetails != null && this.data.bookingDetails.utilities != null){
      const newUtil = {
        name: '',
        price: 0,
        quantity: 0
      };
      this.data.bookingDetails.utilities.push(newUtil);
    }
  }

}
