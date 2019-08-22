import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _ from "lodash";
import { BookingService } from '../booking.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { utilityDropDown } from '../model/booking-detail';

@Component({
  selector: 'app-booking-infor',
  templateUrl: './booking-infor.component.html',
  styleUrls: ['./booking-infor.component.css']
})
export class BookingInforComponent implements OnInit {


  isEditable = false;
  

  utilityItem : Array<string> = ["Shoes", "Shuttels", "Racquets", "CourtPrice", "Drinks"]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<BookingInforComponent>,
  private toastr: ToastrService) { }
  

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
    console.log(this.data);
    // let formatedDate = moment(this.startDate, 'DD-MMM-YYYY').format('DD-MM-YYYY');
    // this.bookingService.updateTimeSlotDetails(formatedDate, this.data).subscribe(response => {
    //   if(response) {
    //     this.bookingService.refresh.next(response);
    //     this.toastr.success("Slot Updated")
    //     this.dialogRef.close();
    //   }
    // })
    if(this.isEditable && this.data){
      this.dialogRef.close(this.data);
    } else {
      this.toastr.error("please click Edit details before Saving");
    }
  }

  onNewUtility() {

    const newUtil = {
      utilityName: '', 
      utilityQuantity: 0, 
      utilityPrice: 0
    };

    if(this.data.timeSlotDetails != null && this.data.timeSlotDetails.length > 0 &&
      this.data.timeSlotDetails[0].utilityInfoDetails == null){
        this.data.timeSlotDetails = [];
      }

      this.data.timeSlotDetails[0].utilityInfoDetails.push(newUtil);
  }

}
